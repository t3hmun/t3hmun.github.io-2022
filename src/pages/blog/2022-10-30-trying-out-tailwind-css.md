---
layout: "../../layouts/BlogPost.astro"
title: "Trying Out Tailwind CSS"
description: "My Notes on using Tailwind CSS for this website"
pubDate: "2022-10-30T22:00:00Z"
---

## Introduction

I decided to try out Tailwind CSS, to see how it works and find out why it seems to be so popular.
I have just re-created my website and it needs theme.

Currently my goto method of doing styling is to generate a single CSS file using SASS.
This isn't a bad way of doing things:

- Simple to use and re-use in other projects
- Can be entirely separate from the projects it is used in
- Technology extremely unlikely to become unsupported in a meaningful way
- Easy to pull in a CSS frame-work into the SASS if needed (like PureCSS or Bootstrap)

However I'm bored of fiddling with SASS so time to use shiny new thing for this website.

## Installation

This website is currently built using Astro, so these instructions are for setting up the Tailwind plugin for Astro.

- `npx astro add tailwind` - Answer yes to all questions
- `npm i -D @tailwindcss/typography` - This is needed for formatting all the markdown generated content

The rest of the setup is for code formatting and sorting, which I highly recommend.

- `npm i -D prettier-plugin-astro prettier@latest` - This should already be installed
- `npm i -D prettier-plugin-organize-imports` - Trying this out
- `npm i -D prettier-plugin-tailwindcss@beta` - This is beta, setup based on this [issue comment](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1312202554

`prettierrc.js`:

```js
// This config exists because of issues between tailwind and astro https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1312202554
// No changes to prettier's formatting rules.

module.exports = {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss", // This must be last
  ],
  pluginSearchDirs: false,
};
```

## Typography

Tailwind forces you to style most things individually, but that isn't possible or a good idea for generated content.
The typography plugin sorts out the styling for this situation, just have to add the `prose` class above any reading content.

Add `class="prose prose-code:before:hidden prose-code:after:hidden mx-auto px-1"` to the `<article` element that contains all the generated markdown content.

- `prose` is from the typography plugin, does default formatting for generated content
- `prose-code:before:hidden prose-code:after:hidden` a customisation, removes the backticks surrounding `<code>` in the default theme
- `mx-auto` centre
- `px-1` a minimal gutter for narrow screens

## Basic theming

I like to give the users a choice in themes, style and colour preferences are personal.
I like to be able to change themes depending on the lighting and the time of the day.

Following Tailwind's [dark-mode documentation](https://tailwindcss.com/docs/dark-mode):

- Add `darkMode: 'class'` to the top of the `tailwind.config.cjs`
  - This mode allows creating a manual theme-switcher, the default mode uses the CSS `prefers-color-scheme`, which tries to detect the OS settings
- Add `dark:prose-invert` to the list of classes for articles
- Write JS to add or remove `dark` class from the main document html tag
  - TODO: link to `src/Header.astro`, which has all the JS

## Impression on Tailwind

My first impressions were rather negative.
First there is this quote from the [first core concepts page](https://tailwindcss.com/docs/utility-first):

> Now I know what you’re thinking, “this is an atrocity, what a horrible mess!” and you’re right, it’s kind of ugly. In fact it’s just about impossible to think this is a good idea the first time you see it — you have to actually try it.

Due to the way we do things at work, I am aggressively averse to inline styles.
I work in a team where nobody has learnt CSS properly so inline styles result in everyone creating a unique mess that doesn't work in a new and confusing way.
With a single shared stylesheet we only have one set of badly written styles, so everything goes wrong in the same predictable manner.

Then I reached the [code re-use section](https://tailwindcss.com/docs/reusing-styles) and laughed at the suggestions.
From my perspective suggesting mutli-cursor editing and loops as the **first** suggestion for dealing with repetition is bonkers.

The final section on the page on [premature abstraction](https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction), now this section is very agreeable.
I've run in to these problems and I can see how Tailwind solves those problems.
I'm starting to see how it all comes together and isn't as crazy as it looks.

There is a whole bunch of problems being balanced against each other, I think it is worth spending some more time to see how well Tailwind's compromises work.

## TODOs

- Look into using data-attributes with tailwind to create expanding code sections
- Modifying typography theme
  - Maybe wider code blocks by default (width classes on pre)
- Sligtly lighter screen width background for headings?
