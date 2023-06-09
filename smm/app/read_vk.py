import os
import vk_api
import requests
from dotenv import load_dotenv
from pgsql import check_posts


def read_vk():
    try:
        vk, group_id, token = authorization()
        # Получение всех постов в сообществе
        response = vk.wall.get(access_token=token, owner_id=group_id, count=100)
        count = response['count']
        posts = response['items']

        # Пагинация, если в сообществе больше 100 постов
        while len(posts) < count:
            response = vk.wall.get(access_token=token, owner_id=group_id, count=100, offset=len(posts))
            posts.extend(response['items'])

        for post in posts:
            post_id = post['id']
            text = post['text']
            date = post['date']
            image = ""
            # Проверка на наличие изображения
            if 'attachments' in post and post['attachments'][0]['type'] == 'photo':
                photo_url = post['attachments'][0]['photo']['sizes'][-1]['url']
                image = requests.get(photo_url).content
            check_posts(text, date, image)

        return True, None
    except Exception as err:
        print("Error:", err)
        return False, err

def authorization():
    load_dotenv()

    # данные для авторизации
    app_id = os.getenv('app_id')  # ID приложения ВКонтакте
    client_secret = os.getenv('client_secret')  # секретный ключ доступа приложения
    token = os.getenv('token')  # token пользователя

    # авторизация в ВКонтакте
    vk_session = vk_api.VkApi(app_id=app_id, client_secret=client_secret, token=token)
    return vk_session.get_api(), os.getenv('group_id'), token