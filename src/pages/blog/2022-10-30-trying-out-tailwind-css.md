---
layout: "../../layouts/BlogPost.astro"
title: "Trying Out Tailwind CSS"
description: "I tried out Tailwind for this, seemed like a bad fit for this tiny person website."
pubDate: "2022-10-30T22:00:00Z"
---

## What

I don't like the CSS that came with the template I used so it needs to be customised.
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


## What I Think of Tailwind

I see Tailwind as an attempt to get the right level abstraction over CSS for large website design.

- Inline CSS in style tags can do anything and everything.
  - Unfortunately inline styles, have the wrong level of abstraction for a webpage; they quickly become a complicated mess.
- Classes defined in CSS are used to create a sensible level of abstraction
  - The classes defined in frameworks like Bootstrap are often not flexible enough
  - Often end up with too many classes to maintain
  - Often need to hack extra inline styles on top make each page display exactly right
- Tailwind is based on the concept of utility classes
  - Constrained by the overall theme, but much more freedom than most frameworks

Tailwind might be a good idea for complex sites and web-apps.
Plain old CSS seems to be a better fit for a simple personal site.

Then dream behind CSS is that it can be changed to update the style of an entire website or webapp, keeping everything consistent.
For a small site that is very doable, I still think it is a good idea.

As the site gets large and the number of special cases and unique situations pile up either CSS classes begin to pile up or inline styles end up everywhere.
I can see how utility classes might work better for those situations.
Maybe. I don't think it would help with the LOB app's I write at work, the SASS we've written isn't hard to keep working in a small team.

## What Next

Remove tailwind, [import](https://docs.astro.build/en/guides/styling/#import-a-local-stylesheet) a simple CSS theme for my simple website.
Maybe use a minimal framework like [Pure.css](https://purecss.io/) to help with layout, 
not really necessary but probably easier.