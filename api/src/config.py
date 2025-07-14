import os

config = {
    "host": os.environ.get('MYSQL_HOST'),
    "user": os.environ.get('MYSQL_USER'),
    "password": os.environ.get('MYSQL_PASSWORD'),
    "database": os.environ.get('MYSQL_DATABASE')
}