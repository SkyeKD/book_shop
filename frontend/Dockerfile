# Use Node.js for frontend
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
# RUN npm install
# RUN rm -rf node_modules package-lock.json && npm install --force
RUN rm -rf node_modules && npm install --legacy-peer-deps

# Fix permission issues
# RUN chmod +x node_modules/.bin/vite

# Copy the rest of the frontend code
COPY . .

# Set the default user to avoid running as root (security best practice)
# RUN chown -R node:node /app
# USER node

# Expose frontend port
EXPOSE 3000

# Start frontend using npm run dev (instead of npm start)
# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "dev", "--", "--host"]