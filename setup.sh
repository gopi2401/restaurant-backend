#!/usr/bin/env bash
echo "Hello World!"

# apt install nodejs
apt-get install unzip
curl -L -o restaurant-backend-test.zip https://github.com/gopi2401/restaurant-backend/archive/refs/tags/test.zip
unzip restaurant-backend-test.zip.zip -d ./
cd restaurant-backend-test.zip
