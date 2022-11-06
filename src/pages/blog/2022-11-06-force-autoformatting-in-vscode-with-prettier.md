---
layout: "../../layouts/BlogPost.astro"
title: "Force Auto-Formatting in VsCode with Prettier"
description: "I always setup VSCode to use Prettier to force auto-format all our js/web code at work, these are my setup notes."
pubDate: "2022-11-03T12:00:00Z"
---

Manually formatting code gets in the way of doing work, badly formatted code is irritating and unhelpful.
Different opinions on formatting usually leads to endless bikeshedding (this can happen with or without a team to argue with).
The simple way to solve all these problems is to install Prettier and set it to format on save.

- Prettier has all the opinions on how to format, there is no debate allowed
- Formatting is done automatically on save so you
  - Never end up with commits that are just for formatting
  - The project committed VsCode setting means nobody has to be told do it, the formatting just happens

I initially felt some resistance to not allowing myself or anyone to have opinions on formatting, but after a while everyone enjoys not thinking about it at all.
I see this approach getting very popular, these are my instructions for setup.

## Install prettier

- The VsCode extension `esbenp.prettier-vscode`
  - This is the one manual step that I have ask to colleagues to do
- If there is an npm project the add prettier so that the version used stays consistent `npm i --save-dev prettier`
  - This also makes it possible to use plugins to support more files

## Configure VsCode Project Settings

- Create setting for the project `./.vscode/settings.json`
  - Sets the formatter
  - Sets the setting to force formatting on every save
  - Sets the default tab size in VsCode to match Prettier

```jsonc
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[html][js][css][ts][jsx][tsx]": {
    "editor.tabSize": 2
  }
}
```

- Add a `prettierrc.json` file with just `{}` in it (not sure if this is needed anymore)
- One off run prettier on all files with something like `npx prettier ./src/ -w`
  - You might need to create a `.prettierignore` if there are generated files the need skipping, `.git` and `node_modules` should be ignored by default
  - Don't do this on a well established project with a lot of code
    - There is a little risk of code or comments breaking
    - Git blame will point to you on every reformatted line of code
    - If it is done it should be a single PR with only formatting and nothing else

## Enjoy

Free you brain form thinking about formatting. Enjoy it.
