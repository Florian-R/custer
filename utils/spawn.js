const spawn = require('child-process-promise').spawn;
const logData = data => console.log(data.toString());


module.exports = (command, args) => {
  const promise = spawn(command, args);

  const {childProcess} = promise;

  childProcess.stdout.on('data', logData);

  childProcess.stderr.on('data', logData);

  return promise;
}
