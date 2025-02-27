FROM node:18-alpine

WORKDIR /appSenhas

COPY . .

RUN npm install

CMD [ "npm", "start" ]