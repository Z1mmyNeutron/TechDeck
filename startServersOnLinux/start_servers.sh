#!/bin/bash

# Function to start the backend server
start_backend() {
    echo "Starting backend server..."
    cd ../back-end/api
    if [ $? -eq 0 ]; then
        npm install
        if [ $? -eq 0 ]; then
            screen -S backend -dm /bin/zsh -c 'npm run start; exec /bin/zsh'
        else
            echo "Failed to install dependencies for backend server."
            return 1
        fi
    else
        echo "Backend server directory does not exist."
        return 1
    fi
}

# Function to start the frontend server
start_frontend() {
    echo "Starting frontend server..."
    cd ../../web-app
    if [ $? -eq 0 ]; then
        npm install
        if [ $? -eq 0 ]; then
            screen -S frontend -dm /bin/zsh -c 'npm run start; exec /bin/zsh'
        else
            echo "Failed to install dependencies for frontend server."
            return 1
        fi
    else
        echo "Frontend server directory does not exist."
        return 1
    fi
}

# Start the servers
start_backend
start_frontend
