FROM node:18-alpine

WORKDIR /projeto-api

COPY . .

RUN npm install

CMD [ "npm", "start" ]