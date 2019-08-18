const shell = require("shelljs");
shell.echo("hello world shell");

function gitCommands() {
  var gitInit = shell.exec("git init").stdout;
  var repoName = "" + ".git";
  var gitRemote =
    "git remote add origin https://github.com/sandeepnegi1996/" + repoName;

  var gitadd = shell.exec("git add .").stdout;
  var addRemote = shell.exec(gitRemote).stdout;
  var initialCommit = "This is first commit ";
  var gitInitalCommit = shell.exec("git commit -am initialCommit ").stdout;
  var gitPush = shell.exec("git push -u origin master").stdout;
}

function getRemote() {
  //do web scraping
  //log in github
  //create a repo
  //add description
  //go to repo
  //get the remote
  //return remote
}
function main() {
  //getRemote();
  //gitCommands();
}

main();
