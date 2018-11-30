FROM keymetrics/pm2:latest-alpine


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
COPY pm2.json .

# Install app dependencies
RUN npm install

COPY . .

EXPOSE 5000

RUN npm run build-webpack
RUN npm run build-node


CMD [ "pm2-runtime", "start", "pm2.json" ]