FROM node:19.4

WORKDIR /app

COPY package.json .

RUN npm update --location=global npm

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]