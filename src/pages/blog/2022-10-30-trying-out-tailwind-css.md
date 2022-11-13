---
layout: "../../layouts/BlogPost.astro"
title: "Trying Out Tailwind CSS"
description: "I tried out Tailwind for this website, it was not a good fit."
pubDate: "2022-10-30T22:00:00Z"
---

## What

I decided I wanted to customise the style of this website, the Astro docs give a few options on how to do this.
Tailwind CSS was one of those options.
I has no idea what Tailwind is, but it looked popular and well marketed, so I decided to give it a try.

## Setup

- `npx astro add tailwind`
- Answer yes to all questions
- Remove global.css and other existing css
- Now everything looks reset and terrible
- Go learn what Tailwind does...

## My Impressions of Tailwind

Tailwind start you off with a clean slate, reset css and no formatting at all.
I understand this makes it easier to predictably apply styling to individual items.
The idea of using utility classes instead of CSS directly is nice.
Utility classes are a nice level of abstraction on top of CSS, CSS does too many things and does them in odd ways.
However **Tailwind is the wrong choice for this mostly-content static site**.

I ended up with the `@tailwindcss/typography` plugin being responsible for 99% of all styling on the website, because 99% of the content is generated from markdown.
I suppose I could have modified the typography plugin's theme but I think a simple CSS stylesheet is more elegant and obvious.
The typography plugin solves a problem I didn't have until I tried Tailwind.
It also creates a new problem; making the typography styles consistent with rest of the website.

I get the impression that Tailwind could be nice for large websites full of unique pages, each with carefully adjusted, pixel perfect design.
But for this tiny website a nice simple CSS stylesheet will do everything without locking me into some complex magical toolchain.
