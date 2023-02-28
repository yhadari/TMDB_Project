FROM node:18.13.0
WORKDIR /app
COPY ./frontend/package.json /app/package.json
RUN npm install
COPY ./frontend /app
CMD npm run dev