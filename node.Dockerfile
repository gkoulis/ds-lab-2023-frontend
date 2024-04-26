# Use the node image from official Docker Hub
FROM node:20-alpine3.19 as build-stage
# set the working directory
WORKDIR /app
# Copy the working directory in the container
COPY package*.json ./
# Install the project dependencies
RUN npm install
# Copy the rest of the project files to the container
COPY . .
# Build the Vue.js application to the production mode to dist folder
RUN npm run build

# Expose the port 80
EXPOSE 5173
# Start Nginx to serve the application
CMD ["npm", "run", "dev","--host","0.0.0.0"]
