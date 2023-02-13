# Jeidark README

Welcome to my [VSCODE](https://code.visualstudio.com/) theme!

- [06:04](https://www.youtube.com/watch?v=pGzssFNtWXw&t=364s) head on the keyboard and setting your monitor on fire that trick is the **theme debugger** with your theme folder open in vs code you can run it to debug your theme do this by hitting `f5` or run `start debugging` up in the menu when you run the debugger vs code will pop open a new window with the theme customizations.

- [06:33](https://www.youtube.com/watch?v=pGzssFNtWXw&t=393s) **Tokens and Scopes Inspector** to run the inspector in your debugging window hit `ctrl shift p` for the command palette search for *Inspect Editor Tokens and Scopes*. Se param `foreground`. For example: `entity.other.attribute-name.class{ "foreground": "#FFCB6B" }`

- [07:58](https://www.youtube.com/watch?v=pGzssFNtWXw&t=478s) colors like sidebar and menus unfortunately there is no inspector tool for that but you can look up the [vscode theme color reference](https://code.visualstudio.com/api/references/theme-color)

- [08:52](https://www.youtube.com/watch?v=pGzssFNtWXw&t=532s) theme way faster i was able to use this to create a theme in no joke 5 minutes the secret is i built an [online tool that will generate the colors for your theme](https://coder-coder.com/vs-code-theme-color-generator/)

## How do I apply a custom color theme to visual studio code without publishing it

<https://stackoverflow.com/questions/69062735/how-do-i-apply-a-custom-color-theme-to-visual-studio-code-without-publishing-it>

``` shell
npm install @vscode/vsce -g
```

Use `vsce package` in the folder that contains `project.json` to generate a package.

Then you can then install .vsix on any machine you like:

```bash
code --install-extension jei-dark-0.0.1.vsix
```

[https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix)
