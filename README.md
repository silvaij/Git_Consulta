<p align="center">
   <a href="https://git-scm.com/">
      <img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" alt="Logo Git" width="200px" height="80px">
   </a></br>
</p>
<p align="center">
   Git is a <a href="https://git-scm.com/about/free-and-open-source">free and open source</a> distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</br>
   Git is <a href="https://git-scm.com/doc">easy to learn</a> and has a <a href="https://git-scm.com/about/small-and-fast">tiny footprint with lightning fast performance.</a> It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like <a href="https://git-scm.com/about/branching-and-merging">cheap local branching</a>, convenient <a href="https://git-scm.com/about/staging-area">staging areas</a>, and <a href="https://git-scm.com/about/distributed">multiple workflows</a>.
</p>
<p align="center">
   <b>By:</b> <a href="https://git-scm.com/">Git</a>
</p>

<h2>
   <img src="https://user-images.githubusercontent.com/46982925/77262174-fe7e8f00-6c72-11ea-884a-ceaae3c71cd2.png" alt="Icon Git" width="20px" height="20px"> 
   Install/Update
</h2>

- ![Windows-Icon](https://user-images.githubusercontent.com/46982925/77264132-82874580-6c78-11ea-895d-b41cdb40f546.png) **Windows**
>[Download](https://git-scm.com/download/win) latest source release

- ![Mac-Icon](https://user-images.githubusercontent.com/46982925/77265047-7308fc00-6c7a-11ea-8681-8cd213f23174.png) **Mac OS**
>[Download](https://git-scm.com/download/mac) latest source release

- ![Ubuntu-Icon](https://user-images.githubusercontent.com/46982925/77265474-8ec0d200-6c7b-11ea-89fa-e352c02704e5.png) **Ubuntu** ![](https://user-images.githubusercontent.com/46982925/77266259-badd5280-6c7d-11ea-8249-c66a14e29d30.png) **Debian**

```sh
$ sudo add-apt-repository ppa:git-core/ppa -y
$ sudo apt-get update
$ sudo apt-get install git -y
```
- ![Linux-Icon](https://user-images.githubusercontent.com/46982925/77268352-5ffb2980-6c84-11ea-8318-de0e5d624d40.png) **Other**

>Access the list [here](https://git-scm.com/download/linux)

## Commands ([All](https://git-scm.com/docs/git#_git_commands))
#### ![Setup-Icon](https://git-scm.com/images/icons/setup-sm.png) Setup and Config
- ##### [config](https://git-scm.com/docs/git-config) - Get and set repository or global options

_Open the terminal and type the commands:_

_Username:_
```sh
$ git config --global user.name "your_name"
```
_E-mail:_
```sh
$ git config --global user.email "your_email"
```
_Editor:_
```sh
$ git config --global core.editor "your_fav_editor"
```
_Git config editor:_

|         Editor         | Config Command                                                                                       |
|:----------------------:|------------------------------------------------------------------------------------------------------|
|         VS Code        | ` $ git config --global core.editor "code --wait" `                                                  |
|          Atom          | ` $ git config --global core.editor "atom --wait" `                                                  |
|          emacs         | ` $ git config --global core.editor "emacs" `                                                        |
|          nano          | ` $ git config --global core.editor "nano -w" `                                                      |
|           vim          | ` $ git config --global core.editor "vim" `                                                          |
|        Textmate        | ` $ git config --global core.editor "mate -w" `                                                      |
|   Sublime Text (Mac)   | ` $ git config --global core.editor "subl -n -w" `                                                   |
| Sublime Text (Win x86) | ` $ git config --global core.editor "'c:/program files (x86)/sublime text 3/sublimetext.exe' -w" `   |
| Sublime Text (Win x64) | ` $ git config --global core.editor "'c:/program files/sublime text 3/sublimetext.exe' -w" `         |

_Display settings:_
```sh
$ git config <key>
```
_Example:_
```sh
$ git config user.name
$ git config user.email 
$ git config --list
```

#### ![Get-Icon](https://git-scm.com/images/icons/projects-sm.png) Getting and Creating Projects
- ##### [init](https://git-scm.com/docs/git-init) - Create an empty Git repository or reinitialize an existing one
```sh
$ git init
```

- ##### [clone](https://git-scm.com/docs/git-clone) - Clone a repository into a new directory
```sh
$ git clone <repository>
```

#### ![](https://git-scm.com/images/icons/camera-sm.png) Basic Snapshotting
- ##### [satus](https://git-scm.com/docs/git-status) - Show the working tree status
```sh
$ git status
```

- ##### [add](https://git-scm.com/docs/git-add) - Add file contents to the index
_One file:_
```sh
$ git add <file_name>
```
_All files:_
```sh
$ git add *
```

- ##### [rm](https://git-scm.com/docs/git-rm) - Remove files from the working tree and from the index
_One File:_
```sh
$ git rm --cached <file_name>
```
_All files:_
```sh
$ git rm --cached *
```

- ##### [commit](https://git-scm.com/docs/git-commit) - Record changes to the repository
```sh
$ git commit -m "comment"
```

- ##### [reset](https://git-scm.com/docs/git-reset) - Reset current HEAD to the specified state
```sh
$ git reset HEAD <file_name>
```

#### ![Branch-Icon](https://git-scm.com/images/icons/branch-sm.png) Branching and Merging
- ##### [branch](https://git-scm.com/docs/git-branch) - List, create, or delete branches
```sh
$ git branch
```
_Create a new branch with checkout:_
```sh
$ git checkout -b <branch_name>
```

- ##### [log](https://git-scm.com/docs/git-log) - Show commit logs
```sh
$ git log <options>
```

- ##### [checkout](https://git-scm.com/docs/git-checkout) - Switch branches or restore working tree files
```sh
$ git checkout <file_name>
```

#### ![Inpection-Icon](https://git-scm.com/images/icons/sharing-sm.png) Sharing and Updating Projects
- ##### [push](https://git-scm.com/docs/git-push) - Update remote refs along with associated objects
```sh
$ git push
```

#### ![](https://git-scm.com/images/icons/inspection-sm.png) Inspection and Comparison
- ##### [shortlog](https://git-scm.com/docs/git-shortlog) - Summarize git log output
```sh
$ git shortlog <options>
```
- ##### [diff](https://git-scm.com/docs/git-diff) - Show changes between commits, commit and working tree, etc
```sh
$ git diff <options>
```

#### ![Key-Icon](https://user-images.githubusercontent.com/46982925/77376482-2f33f680-6d4f-11ea-801d-8d2f6440a5f6.png) Generating a new SSH key and adding it to the ssh-agent

1. Open your terminal
2. Paste the command below, substituting in your GitHub email address
```sh
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
3. Press Enter for this accepts the default file location
```sh
> Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]
```
4. Type a secure passphrase and confirm (optional)
```sh
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```
5. Enter the folder containing your key (default path is .ssh)
```sh
$ cd ~/.ssh
```
6. Get the key from the _**id_rsa.pub**_ file with the command below
```sh
With cat command:
$ cat id_rsa.pub
```
```sh
With more command:
$ more id_rsa.pub
```