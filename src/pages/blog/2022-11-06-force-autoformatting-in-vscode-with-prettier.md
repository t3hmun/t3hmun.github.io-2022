---
layout: "../../layouts/BlogPost.astro"
title: "Force Auto-Formatting in VsCode with Prettier"
description: "I always setup VSCode to use Prettier to force auto-format all our js/web code at work, these are my setup notes."
pubDate: "2022-11-03T12:00:00Z"
---

I used to spend time formatting, tweaking formatted to make code appear how I wanted it to.
This would conflict with other people's opinions, make the code inconsistent.
I think many people these days are coming round to not allowing themselves to have opinions or options; instead just use an opinionated code formatter and format on save.
Prettier happens to be a most well known formatter for most web-stuff.

When working in VSCode, I set Prettier to format on save in the workspace settings so that everyone working on the code (including future self) stick to the same code formatting rules by default.

## Install prettier

- The VsCode extension `esbenp.prettier-vscode`
  - This is the one manual step that I have ask to colleagues to do
- If there is an npm project the add prettier so that the version used stays consistent `npm i --save-dev prettier`
  - This also makes it possible to use plugins to support more files

## Configure VsCode Project Settings

Create setting for the project `./.vscode/settings.json`.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[html][js][css][ts][jsx][tsx]": {
    // VSCode's default tab size does not match prettier.
    "editor.tabSize": 2
  }
}
```

- One off run prettier on all files with something like `npx prettier ./src/ -w`
- `.git` and `node_modules` should be ignored by default, for more ignores create a `.prettierignore`.

## Enjoy

Free you brain form thinking about formatting. Enjoy it.
