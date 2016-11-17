#!/bin/bash

echo 'CUSTER'

echo '1-Update all'
sudo apt-get update && sudo apt-get upgrade -y

export NVM_DIR="$HOME/.nvm" && (
  git clone https://github.com/creationix/nvm.git "$NVM_DIR"
  cd "$NVM_DIR"
  git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" origin`
) && . "$NVM_DIR/nvm.sh"

echo '3-Installing node'
nvm install node
nvm use node

echo '4-Upgrading npm to latest'
npm install -g npm

echo '5-Install'
node install.js 