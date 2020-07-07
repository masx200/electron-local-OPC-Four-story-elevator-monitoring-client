import { exec } from "child_process";
var commandline = {
  get: getString,
  run: runCommand,
};
function runCommand(command) {
  return exec(command);
}
function getString(command, callback) {
  return exec(
    command,
    (function () {
      return function (err, data, stderr) {
        if (!callback) return;
        callback(err, data, stderr);
      };
    })(callback)
  );
}
export default commandline;
