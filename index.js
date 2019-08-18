// const axios = require("axios");

// axios
//   .get("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function(response) {
//     console.log(response.data);
//     console.log(response.status);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// );

const shell = require("shelljs");
shell.echo("hello world shell");
var version = shell.exec("node --version").stdout;

function GitCommands() {
  var gitCommands = shell.exec("git init").stdout;
  var gitadd = shell.exec("git add .").stdout;
  var remote = "";
  var addRemote = shell.exec(remote).stdout;
  var initialCommit = "This is first commit ";
  var gitInitalCommit = shell.exec("git commit -am initialCommit ").stdout;
}
