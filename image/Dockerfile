FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

ENV NODE_ENV production

CMD ["npm", "run", "dev"]