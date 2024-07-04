# statistics-service/Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5009
CMD ["node", "src/index.js"]
