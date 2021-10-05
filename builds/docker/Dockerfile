# Here a slim image of node v16 is used
# to ensure smallest possible image size.
FROM node:16-bullseye-slim

# The follwoing two layers are for cached npm installs.
COPY ./package.json ./package.json
RUN npm i

# The express http server listens to this port.
# By exposing it we allow outside communication to this port.
EXPOSE 8080

# This copies everything not ignored by the ".dockerignore"
# this is done after the package.json copy because that should be cached.
COPY . .

# The default command to run when the container start
# is the "npm run start" which starts the express http server.
CMD [ "npm", "run", "start" ]
