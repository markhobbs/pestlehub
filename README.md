Dockerized Tailwind Styled User Journey with a Flask MySQL API.

# RUNNING
## ENV
Rename example .env.example > .env 

## DOCKER
```bash
docker-compose up -d --build
```

## SITE
A demo user account has been provided for accessing the dashboard. 
Login: http://localhost:8082/login
username: demo@pestlehub.com
password: pA55wORD$


# DEVELOPMENT
## NVM
```bash
nvm install v18.20.8
nvm use v18.20.8
```

## NEXT
```bash
cd next
npm install
npm run dev

npm run build
npm start
```

## TESTING
```bash
cd next
npm install
npm run test
npm run test:watch
npm run test:coverage
```