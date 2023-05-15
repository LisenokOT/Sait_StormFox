import telegram
import os
from dotenv import load_dotenv


def TelegramPost(message):
    try:
        bot, chat_id = authorization()

        # Отправляем текстовое сообщение
        bot.send_message(chat_id=chat_id, text=message)

        return True, None
    except Exception as err:
        return False, err


def authorization():
    load_dotenv()

    # Задаем токен бота
    bot_token = os.getenv('bot_token')

    # Создаем объект бота
    return telegram.Bot(token=bot_token),  os.getenv('chat_id')