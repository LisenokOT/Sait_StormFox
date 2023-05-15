import datetime
import time
from Telegram.telegram import TelegramPost


def send_delayed_message(message, attachments, date):
    # Рассчитываем разницу между текущим временем и временем отправки сообщения
    delta = date - datetime.datetime.utcnow()

    # Преобразуем разницу в секунды
    delay = delta.total_seconds()

    if delay > 0:
        time.sleep(delay)
    
    change_status_posts(message, attachments, date)

    TelegramPost(message)