FROM node:22.12.0-alpine

WORKDIR /react-app

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]

