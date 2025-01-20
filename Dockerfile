FROM node:16.0.0-alpine3.11

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

ENTRYPOINT [ "node", "index.js" ]