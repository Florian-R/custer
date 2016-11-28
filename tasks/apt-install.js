const spawn = require('child-process-promise').spawn;

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
  'deborphan',

  // Killall and friends
  'psmisc'
]


const logData = data => console.log(data.toString());


module.exports = (options = {}) => {
  let args = ['apt-get', 'install', '-y'].concat(packages);

  if (options.dry) {
     args.push('--dry-run');
  }

  const promise = spawn('sudo', args);

  const {childProcess} = promise;

  childProcess.stdout.on('data', logData);

  childProcess.stderr.on('data', logData);

  return promise;
}
