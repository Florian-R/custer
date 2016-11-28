const os = require('os');
const spawn = require('../utils/spawn');
const fs = require('fs-extra-promise');
// Waiting for https://github.com/Microsoft/vscode/issues/2973
const tmpUrl = 'https://go.microsoft.com/fwlink/?LinkID=760868';
// TODO: Projects relative path
const homeDir = os.homedir()
const tmpDir = homeDir + '/custer/tmp/'
const debPath = tmpDir + 'code.deb';

// TODO: Cleanup the list
const extensions = [
  'Alan.stylus',
  'EditorConfig.EditorConfig',
  'MattiasPernhult.vscode-todo',
  'diniremix.vscode-coffeescript-snippets',
  'donjayamanne.githistory',
  'drewbarrett.vscode-coffeescript-preview',
  'humao.rest-client',
  'lonefy.vscode-JS-CSS-HTML-formatter',
  'mohsen1.prettify-json',
  'msjsdiag.debugger-for-chrome',
  'robinbentley.sass-indented',
  'slb235.vscode-coffeelint'
]

const installExtension = (ext) => spawn('code', ['--install-extension', ext]);

module.exports = function () {
  console.log(tmpDir)
  console.log(fs.mkdirs(tmpDir))

  return fs.mkdirpAsync(tmpDir)
//    .then(() => spawn('wget', [tmpUrl, '-O', debPath]))
    .then(() => spawn('sudo', ['dpkg', '-i', debPath]))
    .then(() => Promise.all(extensions.map(installExtension)));
}




