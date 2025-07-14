Dockerized Tailwind Styled User Journey with a Flask MySQL API.

# SETUP
First create a .env file in the root directory with the following...

```bash
TAG=2.1.2
MYSQL_HOST=10.5.0.2
MYSQL_ROOT_PASSWORD=pA55wORD$
MYSQL_USER=root
MYSQL_DATABASE=pestle_DB
MYSQL_PASSWORD=pA55wORD$
```

Additionally an .env file within the next directory with the following
```bash
NEXT_PUBLIC_API_URI=http://localhost:8081
```

# NVM
```bash
nvm install v18.20.8

nvm use v18.20.8
```

# NEXT

```bash

cd next

npm install

npm run build
```

# DOCKER
```bash

cd ..

docker-compose --env-file .env -f docker-compose.yml up -d --no-deps --build --remove-orphans
```

# SITE
A Demo Account has been provided for accessing the dashboard. 

Login: http://localhost:8082/login

username: demo@pestlehub.com

password: pA55wORD$


# TESTING
```bash

npm run test

npm run test:watch

npm run test:coverage
```

# POSSIBLE IMPROVEMENTS
Port the Flask API to Express or NextJS Middleware.
Encrypt API Requests/Responses.
