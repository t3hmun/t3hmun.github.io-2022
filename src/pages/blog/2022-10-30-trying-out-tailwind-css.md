---
layout: "../../layouts/BlogPost.astro"
title: "Trying Out Tailwind CSS"
description: "My initial impression of Tailwind CSS"
pubDate: "2022-11-21T22:00:00Z"
---

## Motivation

I had no idea what Tailwind is but saw that Astro had an integration and have a vague notion that it is popular.
This website needed to be styled to my liking but I wasn't enjoying updating my old SASS stylesheet (used on my [old website](https://www.t3hmun.com/t3hmun.github.io-old/)).
Trying the shiny new tool seems to be the answer.

## My Initial Impression

For context, I spend little time on UI design, I learnt a enough SASS to theme Bootstrap many years ago and try to edit it as little as possible.
It has worked as a way to maintain a common, consistent appearance across multiple internal applications.
With this shared-global-stylesheet approach as my default way of working, **Tailwind CSS looks completely bonkers**.

The utility classes appeal to me, I'm bad at CSS, the utility classes abstract away the details I don't care about.
They make doing CSS easier.
[The documentation](https://tailwindcss.com/docs/utility-first) perfectly predicted what I was thinking:

> Now I know what you’re thinking, “this is an atrocity, what a horrible mess!” and you’re right, it’s kind of ugly. In fact it’s just about impossible to think this is a good idea the first time you see it — you have to actually try it.

I was prepared to accept this is something to try but the docs seem to be strongly encouraging repetition.

> This is easily solved by extracting components and partials, and using editor and language features like multi-cursor editing and simple loops.

I get the idea of shifting design to use completely independent components, style, markup and js all together in small maintainable pieces.
This part I can see as a great alternative to giant and difficult to maintain stylesheets.
I just have to get used to writing a lot of small components, a library of components could do a nice job of replacing Bootstrap.

The part I can't get on board with is using loops and multiple cursors as a way of dealing with repetition within a single file.
If a loop made sense on a page, it would have made sense before without considering the styles.
Multiple cursors suggestion just seems awkward, slow and error prone.
Repetition does not make intent obvious, you can't easily tell if the class lists are identical or slightly difficult.

Maybe I'll change my mind after I've used this for more than a few hours.
Maybe this doesn't quite fit my use cases.
Only one thing to do, build.
