#!/usr/bin/env node

'use strict';

const fs = require('fs');
const os = require('os');

const aptInstall = require('./tasks/apt-install')
const cleanup = require('./tasks/cleanup')

aptInstall()
  .then(cleanup)
  .then((result) => console.log({result}))
  .catch((error) => console.log({error}))




/*
//const home = os.homedir();
// const del = require('del');
// console.log({del})
const symlink = require('fs-symlink');
const exec = require('child_process').exec;

symlink('./dotfiles/.bashrc', home + '/.bashrc')
  .catch(function(error) {
    console.log({error})
  });*/