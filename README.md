Dockerized Tailwind Styled User Journey with a Flask MySQL API.

# NVM
```bash
nvm install v18.20.8

nvm use v18.20.8
```

# ENV
Rename example .env.example > .env 

Update to your requirements.  Or store them in Git enviorment variables 

# DOCKER
```bash
cd ..

docker-compose up -d --build
```

# NEXT
```bash
cd next

npm install

npm run build

```
# TESTING
```bash
npm run test

npm run test:watch

npm run test:coverage
```

# SITE
A demo user account has been provided for accessing the dashboard. 

Login: http://localhost:8082/login

username: demo@pestlehub.com

password: pA55wORD$

# POSSIBLE IMPROVEMENTS
Port the Flask API to Express or NextJS Middleware.

Encrypt API Requests/Responses.