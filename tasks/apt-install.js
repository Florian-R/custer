const exec = require('child-process-promise').exec;

// TODO: Split this in a conf, for self documenting
const packages = [
  // Self-explanatory
  'bash-completion',

  // Base packages for X
  'xfonts-base',
  'xserver-xorg',
  'xserver-xorg-input-all',
  'xinit',

  // xrandr
  'x11-xserver-utils',

  // Deps for code and most electron-based apps
  'libgconf-2.4',
  'libnotify4',

  // Session manager
  'lightdm',

  // The WM. Consider full i3 package in the future
  'i3-wm',

  // Dmenu
  'suckless-tools',

  // Utils
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