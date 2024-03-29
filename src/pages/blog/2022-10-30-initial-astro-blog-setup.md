---
layout: "../../layouts/BlogPost.astro"
title: "Initial Astro Blog Setup"
description: "Setting up this website using Astro.build."
pubDate: "2022-10-30T15:30:00Z"
---

I decided it is time I had a simple reliable website and personal blog.
I the past I've written my own static site generators to create my personal site.
Those projects we good for learning, however they were all abandoned when the thing I was learning stopped being fun or interesting.

This time I'm using an existing established framework, I am not planning to re-invent the wheel (yet).

I picked [Astro](https://github.com/withastro/astro) because it has clean HTML output without JS by default, perfectly suited to a static website.

## Setup

### Astro Site Generation via GitHub Actions

- `npm create astro@latest -- --template blog` default / yes all options
- Delete unwanted pages and images
- Fix `config.ts` metadata
- Update url in `astro.config.mjs`
- Create `.github/workflows/deploy.yml` using [these instructions](https://docs.astro.build/en/guides/deploy/github/).
- Now it works.

### Domain

- Change `Pages` settings in the github repo ot point to my www domain
- Update CNAME record to point to `t3hmun.github.io`
- Done.

## Success

I've done everything needed, this is now a working site that publishes itself automatically when anything new is pushed.
