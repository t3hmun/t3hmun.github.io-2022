---
layout: "../../layouts/BlogPost.astro"
title: "Inital Astro Blog Setup"
description: "A page full of features that can be used when writing pages of this website."
pubDate: "2022-10-30T15:30:00Z"
---

## Why

I want a simple reliable website and personal blog.
I the past I've written my own static site generators to create my site.
Those projects we good for learning, however they were all abandoned when the thing I was learning stopped being fun.

This time I'm using an existing working framework, I am not going to re-inventing the wheel for fun (yet).

I picked [Astro](https://github.com/withastro/astro) because it has clean HTML output with no JS by default, perfectly suited to a static website.

## Setup

### Astro Site Generation via GitHub Actions

- `npm create astro@latest -- --template blog` default / yes all options
- Delete unwanted pages and images
- Fix `config.ts` metadata
- Update url in `astro.config.mjs`
- Create `.github/workflows/deploy.yml` using [these instructions](.github/workflows/deploy.yml).
- Now it works.

### Domain

- Change `Pages` settings in the github repo ot point to my www domain
- Update CNAME record to point to `t3hmun.github.io`
- Done.

## Success

I've done everything needed, this is now a working site that publishes itself automatically when anything new is pushed.
