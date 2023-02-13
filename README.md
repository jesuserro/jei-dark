# Jeidark README

Welcome to my [VSCODE](https://code.visualstudio.com/) theme!

## Install

``` bash
# Use `vsce package` in the folder that contains `project.json` to generate a package.
cd /home/username/projects

git clone https://github.com/jesuserro/jei-dark.git

cd jei-dark

# Edit your files and then...
vsce package

# Then you can then install .vsix on any machine you like:
code --install-extension jei-dark-0.0.1.vsix
```

- [How do I apply a custom color theme to visual studio code without publishing it](https://stackoverflow.com/questions/69062735/how-do-i-apply-a-custom-color-theme-to-visual-studio-code-without-publishing-it)
- [Install from a VSIX](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix)

## Previous Environment

Install NPM, Node.js, NVM and VSCE:

``` shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

nvm --version
## If zsh, add this lines: https://github.com/nvm-sh/nvm#manual-install

# Upgrade your Node.js (and npm)
nvm install node

nvm use node

npm install @vscode/vsce -g
```

## Making your own theme Tutorial

- [06:04](https://www.youtube.com/watch?v=pGzssFNtWXw&t=364s) head on the keyboard and setting your monitor on fire that trick is the **theme debugger** with your theme folder open in vs code you can run it to debug your theme do this by hitting `f5` or run `start debugging` up in the menu when you run the debugger vs code will pop open a new window with the theme customizations.

- [06:33](https://www.youtube.com/watch?v=pGzssFNtWXw&t=393s) **Tokens and Scopes Inspector** to run the inspector in your debugging window hit `ctrl shift p` for the command palette search for *Inspect Editor Tokens and Scopes*. Se param `foreground`. For example: `entity.other.attribute-name.class{ "foreground": "#FFCB6B" }`

- [07:58](https://www.youtube.com/watch?v=pGzssFNtWXw&t=478s) colors like sidebar and menus unfortunately there is no inspector tool for that but you can look up the [vscode theme color reference](https://code.visualstudio.com/api/references/theme-color)

- [08:52](https://www.youtube.com/watch?v=pGzssFNtWXw&t=532s) theme way faster i was able to use this to create a theme in no joke 5 minutes the secret is i built an [online tool that will generate the colors for your theme](https://coder-coder.com/vs-code-theme-color-generator/)
