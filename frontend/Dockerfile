# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app source code to the container
COPY . .

# Build the app
RUN npm build

# Expose port 80 for the application
EXPOSE 3000

# Define the command to run when the container starts
CMD ["npm", "start"]
