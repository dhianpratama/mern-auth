FROM node:10.16.2-stretch

WORKDIR /app

# Build assets
COPY . ./
RUN npm install
RUN npm install --prefix client

CMD npm run start
