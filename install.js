#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const home = os.homedir();
// const del = require('del');
// console.log({del})

const symlink = require('fs-symlink');
const exec = require('child_process').exec;

sourceBashrc = function () {
  exec('. ~/.bashrc', function (error, stdout, stderr) {
    if (error) {
      console.log({error, stdout, stderr});
    }
  })
}

symlink('./dotfiles/.bashrc', home + '/.bashrc').then(sourceBashrc)
  .catch(function(error) {
    console.log({error})
  });