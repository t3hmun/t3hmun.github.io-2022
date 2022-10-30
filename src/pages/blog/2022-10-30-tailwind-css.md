---
layout: "../../layouts/BlogPost.astro"
title: "Tailwind CSS"
description: "A page full of features that can be used when writing pages of this website."
pubDate: "2022-10-30T22:00:00Z"
---

## What

I don't like the template CSS so it needs to be customised.
An opportunity to learn Tailwind CSS.
I have no idea what Tailwind is or does, but I've heard good things.

## Setup

- `npx astro add tailwind`
- Answer yes to all questions
- Remove global.css
- Now everthing looks reset and bad
- Go learn what Tailwind does...

## Formatting Interlude

Now that many files are getting edited, formatting is becoming an issue.
In my opinion there is one good solution to this:

- Install prettier
  - `npm i --save-dev prettier-plugin-astro prettier`
- Configure VSCode to apply prettier's formatting on every save
  - `./.vscode/settings.json`
    - `"editor.defaultFormatter": "esbenp.prettier-vscode",`
    - `"editor.formatOnSave": true`
  - Add a `prettierrc.json` file with just `{}` in it (not sure if this is needed anymore)
  - One off run prettier on all files with `npx prettier ./src/ -w`
    - This is something I'd never do on an established project

At work I've made this the rule with all projects, everyone is required to enjoy never manually formatting ever again.



