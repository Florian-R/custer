const exec = require('child-process-promise').exec;
const packages = [
  'bash-completion',
  'xfonts-base',
  'xserver-xorg',
  'xserver-xorg-input-all',
  'xinit',
  'lightdm',
  // Consider full i3 package in the future
  'i3-wm',
  'suckless-tools',
  'locate',
  // Killall and friends
  'psmisc'
]


module.exports = (options = {}) => {
  let command = 'sudo apt-get install -y ' + packages.join(' ');

  if (options.dry) {
     command += ' --dry-run';
  }

  return exec(command);
}