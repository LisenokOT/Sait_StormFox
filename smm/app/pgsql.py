import os
import psycopg2
from psycopg2 import Error
from psycopg2 import sql
import datetime
from dotenv import load_dotenv

def log(text, err=""):
    print(datetime.datetime.utcnow().isoformat(sep=' ', timespec='milliseconds') + " UTC LOG: " + text, err)

def insert_post(text, date, image):
    try:
        connection = open_database()
        with connection.cursor() as cursor:
            insert_query = sql.SQL("INSERT INTO posts (text, image, publication_date) VALUES (%s, %s, %s)")
            params = (text, psycopg2.Binary(image), date)
            cursor.execute(insert_query, params)
            connection.commit()
        connection.close()
        return True
    except (Exception, Error) as error:
        log("Error when adding a post", error)
        connection.close()
        return False

def insert_future_post(text, date, image):
    try:
        connection = open_database()
        with connection.cursor() as cursor:
            insert_query = sql.SQL("INSERT INTO future_posts (text, image, publication_date) VALUES (%s, %s, %s)")
            params = (text, psycopg2.Binary(image), date)
            cursor.execute(insert_query, params)
            connection.commit()
        connection.close()
        return True
    except (Exception, Error) as error:
        log("Error when adding a future post", error)
        connection.close()
        return False

def select_posts():
    try:
        connection = open_database()
        answer = None
        with connection.cursor() as cursor:
            insert_query = sql.SQL("SELECT * FROM posts")
            cursor.execute(insert_query)
            answer = cursor.fetchall()
        connection.close()
        return answer
    except (Exception, Error) as error:
        log("Error when select a posts", error)
        connection.close()
        return None

def change_status_posts(text, date, image):
    try:
        connection = open_database()
        with connection.cursor() as cursor:
            insert_post(text, date, image)
            insert_query = sql.SQL("DELETE FROM future_posts WHERE text = %s AND publication_date = %s")
            params = (text, date)
            cursor.execute(insert_query, params)
            connection.commit()
        connection.close()
    except (Exception, Error) as error:
        log("Error when change status posts", error)
        connection.close()

def user_registration(username, password):
    try:
        connection = open_database()
        with connection.cursor() as cursor:
            insert_query = sql.SQL("INSERT INTO users (username, password, role) VALUES (%s, %s, %s)")
            params = (username, password, 'user')
            cursor.execute(insert_query, params)
            connection.commit()

        connection.close()
        return True
    except (Exception, Error) as error:
        log("Error when user registration", error)
        connection.close()
        return None

def user_authorization(username):
    try:
        connection = open_database()
        answer = None
        with connection.cursor() as cursor:
            insert_query = sql.SQL("SELECT (password, role) FROM users WHERE username = %s")
            params = (username,)
            cursor.execute(insert_query, params)
            answer = cursor.fetchall()
        connection.close()
        return None if len(answer) == 0 else answer
    except (Exception, Error) as error:
        log("Error when user authorization", error)
        connection.close()
        return None


def find_future_posts():
    try:
        connection = open_database()
        answer = None
        with connection.cursor() as cursor:
            insert_query = sql.SQL("SELECT * FROM future_posts")
            cursor.execute(insert_query)
            cursor.fetchall()
            answer = cursor.fetchall()
        connection.close()
        return answer
    except (Exception, Error) as error:
        log("Error when find future posts", error)
        connection.close()
        return None

def check_posts(text, date, image):
    try:
        connection = open_database()
        answer = None
        with connection.cursor() as cursor:
            escaped_text = sql.Identifier(text)
            insert_query = sql.SQL("SELECT * FROM posts WHERE text = '{}'").format(escaped_text)
            cursor.execute(insert_query)
            answer = cursor.fetchall()
            if len(answer) == 0:
                insert_post(text, datetime.datetime.fromtimestamp(int(date)).strftime("%Y-%m-%d %H:%M:%S"), image)
        connection.close()
        return answer
    except (Exception, Error) as error:
        log("Error when check posts", error)
        connection.close()
        return None

def open_database():
    try:
        load_dotenv()

        # данные для подключения
        user = os.getenv('user')
        password = os.getenv('password')
        host = os.getenv('host')
        port = os.getenv('port')
        database = os.getenv('database')

        return psycopg2.connect(user=user, password=password, host=host, port=port, database=database)

    except (Exception, Error) as error:
        log("Ошибка при работе с PostgreSQL", error)
        return None