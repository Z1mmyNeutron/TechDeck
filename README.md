# RUN SITE

Christina Zimmer:
Created 4/1
David Ranoia
Updated 5/1

## To Start

### Short Version Mac

## Running start_servers.sh on Mac

The `start_servers.sh` script is designed to start several servers for a web application. Here are the steps to run it on a Mac:

## Prerequisites

Before running the script, you need to make sure that you have the following software installed on your Mac:

- [Node.js](https://nodejs.org/en/download/) - a JavaScript runtime for building web applications
- [npm](https://www.npmjs.com/get-npm) - a package manager for Node.js
- [.env](https://drive.google.com/file/d/17mHczLCCpIPQGvCpBbZdZK4ud9lMAHjh/view?usp=sharing) - place this file you download in the ~back-end/api/ folder (root of api folder)

## Running the script

To run the `start_servers.sh` script, follow these steps:

1. Open the Terminal app on your Mac
2. Navigate to the directory where the `start_servers.sh` file is located using the `cd` command. For example, if the file is located in the `~javascriptfinalproject/startServersOnMac/` directory, you would type the following command in the Terminal:

   ```bash
   cd ~javascriptfinalproject/startServersOnMac/
   ```

3. Make the script executable by running the following command:

   ```bash
   chmod +x start_servers.sh
   ```

4. Finally, run the script by typing the following command:

   ```bash
   ./start_servers.sh
   ```

This will start the servers for your web application. You should see output in the Terminal indicating that the servers have started successfully.

## Troubleshooting

If you encounter any issues while running the script, try the following troubleshooting steps:

- Make sure that Node.js and npm are installed correctly and are up to date.
- Check that the `start_servers.sh` file has the correct permissions by running the `ls -l` command in the Terminal and verifying that the file has execute permissions (the permissions should include an `x` in the user, group, or other permissions).
- Check the output in the Terminal for any error messages that may indicate what went wrong.

### Long Version

### Install Modules

1. start at JS_Final_Project
2. ls
3. cd web-app
4. npm install
5. cd ../back-end/api
6. npm install

## To run

1. Open two terminals.

In the first terminal we are going to start the front end server

Front end:

1. start in JS_Final_Project folder
2. cd web-app/src
3. npm install
4. npm run start
5. Open browser (Preferably chrome) and go to localhost:3000

Open second terminal for backend: Back end:

1. start in JS_Final_Project folder
2. cd back-end/api
3. npm run start
