FROM node:19.4

WORKDIR /app

COPY package.json .

RUN npm update --location=global npm

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]