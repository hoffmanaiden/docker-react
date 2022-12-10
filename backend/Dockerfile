FROM node:18-alpine
RUN yarn global add nodemon
WORKDIR /backend
COPY package.json .
RUN yarn install --production
COPY . .
EXPOSE 4000
# CMD ["node", "index.js"]
CMD ["nodemon", "run", "dev"]
