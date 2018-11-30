FROM keymetrics/pm2:latest-alpine

# Bundle APP files
WORKDIR /usr/src/app

COPY package.json .
COPY pm2.json .

# Install app dependencies
RUN npm install

COPY . .

#RUN ls -al -R
EXPOSE 5000

RUN npm run build-webpack
RUN npm run build-node


CMD [ "pm2-runtime", "start", "pm2.json" ]