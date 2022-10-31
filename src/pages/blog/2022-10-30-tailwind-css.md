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
  - Follow [this issue](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31) on GitHub for astro compatible tailwind support

At work I've made this the rule with all projects, everyone is required to enjoy never manually formatting ever again.


## What is Tailwind

I see Tailwind as an attempt to get the right level abstraction over CSS for webpage design.

- Inline CSS in style tags can do anything and everything.
  - Unfortunately inline styles, have the wrong level of abstraction for a webpage; they quickly become a complicated mess.
- Classes defined in CSS are used to create a sensible level of abstraction
  - The classes defined in frameworks like Bootstrap are often not flexible enough
  - Often end up with too many classes to maintain
  - Often need to hack extra inline styles on top make each page display exactly right
- Tailwind is based on the concept of utility classes
  - Constrained by the overall theme, but much more freedom than most frameworks


## Typography Plugin

This does most of the work for styling the content.
It is good enough.

TODO: highlight.js