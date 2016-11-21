const exec = require('child-process-promise').exec;


module.exports = (options = {}) => {
  let command = 'sudo apt-get autoremove --purge -y';

  if (options.dry) {
     command += ' --dry-run';
  }

  return exec(command);
}