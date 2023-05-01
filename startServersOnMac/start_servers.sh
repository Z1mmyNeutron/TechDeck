#!/bin/bash

# Create temporary scripts to start the servers
echo '#!/bin/bash
cd '"$(pwd)"'/javascriptFinalProject/back-end/api
npm install
npm run start' > tmp_backend.sh

echo '#!/bin/bash
cd '"$(pwd)"'/javascriptFinalProject/web-app
npm install
npm run start' > tmp_frontend.sh

# Make the temporary scripts executable
chmod +x tmp_backend.sh tmp_frontend.sh

# Open new Terminal windows to run the temporary scripts
open -a Terminal.app -n "$(pwd)/tmp_backend.sh"
open -a Terminal.app -n "$(pwd)/tmp_frontend.sh"