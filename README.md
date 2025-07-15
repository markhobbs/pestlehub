Dockerized Tailwind Styled User Journey with a Flask MySQL API.

# NVM
```bash
nvm install v18.20.8

nvm use v18.20.8
```

# ENV
Rename example .env.example > .env 
Rename example /next/.env.example .env  > /next/.env
Update to your requirements.  Or store them in Git enviorment variables 

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
A demo user account has been provided for accessing the dashboard. 

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
Not Logged in Dishbuilder User, Fix Journey break (Created Dishes) after login. 