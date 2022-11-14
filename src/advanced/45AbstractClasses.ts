abstract class Command {
  abstract commandLine(): string;

  execute() {
    console.log("Executng:", this.commandLine());
  }
}

//idea is for child classes to inherit them and provide implimentation for abstract memebers

class GitResetCommand extends Command {
  commandLine() {
    return "git reset --hard";
  }
}

class GitFetchCommand extends Command {
  commandLine() {
    return "git fetch --all";
  }
}

new GitResetCommand().execute();
new GitFetchCommand().execute();

//new Command(); //will result in error, due to can not create an instance of abstract class
