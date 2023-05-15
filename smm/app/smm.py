import datetime
from threading import Thread
from VK.vk import VKpost
from delay import send_delayed_message
from flask import Flask, request, jsonify
from pgsql import *
from read_vk import read_vk
import base64


app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 10000 * 1024 * 1024  # Set maximum response size to 10MB
def log(text, err=""):
    print(datetime.datetime.utcnow().isoformat(sep=' ', timespec='milliseconds') + " UTC LOG: " + text, err)

def startInitial():
    log("Starting initial preparation")
    read_vk()
    info = find_future_posts()
    for elem in info:
        threadDelay = Thread(target=send_delayed_message, args=(elem[1], elem[2], elem[3]))
        threadDelay.start()
    log("Ending initial preparation")

threadStart = Thread(target=startInitial)
threadStart.start()

@app.route('/post', methods=['GET', 'POST'])
def post():
    if request.method == 'POST':
        text = request.form.get('text', "")
        image = request.files.get('image', None)

        file_info = str(image)

        start_index = file_info.rfind("'") + 1
        end_index = file_info.rfind("'", 0, start_index - 1)
        file_type = file_info[end_index + 1 : start_index - 1]

        start_index = file_info.rfind(".") + 1
        end_index = file_info.find("'", start_index)
        file_extension = file_info[start_index:end_index]

        if image is not None:
            image = image.read()
        date_str = request.form.get('date', None)
        if date_str is None:
            date = datetime.datetime.now()
        else:
            date = datetime.datetime.strptime(date_str, '%Y-%m-%d %H:%M')
        if datetime.datetime.now() > date:
            date = datetime.datetime.now()
            insert_post(text, date, image)
        else:
            insert_future_post(text, date, image)

        # код для обработки поста
        statusVK, vk_error = VKpost(text, image, date, (file_extension, file_type))
        threadDelay = Thread(target=send_delayed_message, args=(text, image, date))
        threadDelay.start()

        if statusVK:
            return 'Post created successfully!'
        error_str = 'Error when creating a post!'
        if not statusVK:
            error_str += '\nVK - ' + str(vk_error)
        status = 200
        headers = {'Content-Type': 'text/plain'}
        log(error_str)
        return error_str, status, headers

    elif request.method == 'GET':
        data = select_posts()
        if data is None:
            data = "No posts"
        data_dict = {'posts': []}
        for post in data:
            image_bytes = bytes(post[2])
            image_base64 = base64.b64encode(image_bytes).decode('utf-8')
            post_dict = {
                'text': post[1],
                'date': post[3].strftime('%Y-%m-%d %H:%M'),
                # 'image': image_base64
            }
            data_dict['posts'].append(post_dict)
        status = 200
        headers = {'Content-Type': 'application/json'}
        return jsonify(data_dict), status, headers

@app.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == 'POST':
        username = request.form.get('username', "")
        password = request.form.get('password', "")
        data = user_registration(username, password)
        if data is None:
            data = "Error during user registration!"
        else:
            data = "The user has been successfully registered!"
        status = 200
        headers = {'Content-Type': 'text/plain'}
        return data, status, headers

    elif request.method == 'GET':
        username = request.form.get('username', "")
        data = user_authorization(username)
        if data is None or len(data) == 0:
            data = "The user does not exist"
        status = 200
        headers = {'Content-Type': 'text/plain'}
        return str(data[0]), status, headers
