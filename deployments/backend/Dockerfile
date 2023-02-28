FROM node:18.13.0

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY ./backend/package.json /app/package.json
RUN npm install

# start app
RUN npm run start:migrate:dev
RUN npm run start:prisma-studio
CMD ["npm", "run", "dev"]
# CMD ["tail", "-f"]