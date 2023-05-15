import os
import vk_api
import requests
from dotenv import load_dotenv


def VKpost(message, image_bytes, publish_date, file_data):
    try:
        vk, group_id = authorization()
        # выкладываем пост с отложенной отправкой
        photo_id = upload_image_to_vk(image_bytes, vk, group_id, file_data)
        if photo_id:
            attachments = f"photo{photo_id}"
        vk.wall.post(owner_id=group_id, message=message, attachments=attachments, publish_date=publish_date.timestamp())
        return True, None
    except Exception as err:
        return False, err

def upload_image_to_vk(image_bytes, vk, group_id, file_data):
    upload_url = vk.photos.getWallUploadServer(group_id=-int(group_id))['upload_url']

    files = {'photo': ('image.' + file_data[0], image_bytes, file_data[1])}
    response = requests.post(upload_url, files=files)
    if response.status_code == 200:
        photo_info = response.json()
        photo_id = vk.photos.saveWallPhoto(group_id=-int(group_id), photo=photo_info['photo'], server=photo_info['server'], hash=photo_info['hash'])[0]['id']
        return photo_id
    else:
        return None

def authorization():
    load_dotenv()

    # данные для авторизации
    app_id = os.getenv('app_id')  # ID приложения ВКонтакте
    client_secret = os.getenv('client_secret')  # секретный ключ доступа приложения
    access_token = os.getenv('access_token')  # access_token пользователя

    # авторизация в ВКонтакте
    vk_session = vk_api.VkApi(app_id=app_id, client_secret=client_secret, token=access_token)
    return vk_session.get_api(), os.getenv('group_id')