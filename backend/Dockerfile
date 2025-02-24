# Use official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (optimizes Docker caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install dependencies, including nodemon globally
# RUN npm install -g nodemon && npm install

# Copy all remaining backend files into the container
COPY . .

# Set the default user to avoid running as root (security best practice)
# RUN chown -R node:node /app
# USER node

# Expose the backend port
EXPOSE 8800

# Start the backend server using `npm start`
CMD ["npm", "start"]
# CMD ["nodemon", "index.js"]