---
layout: "../../layouts/BlogPost.astro"
title: "Dark Light Theming Code in Astro"
description: "Good light and dark theming for code blocks generated from md wasn't straight forward."
pubDate: "2022-11-30T23:30:00Z"
---

## Possible Solutions

The default syntax highlighter Astro uses on markdown is [Shiki](https://github.com/shikijs/shiki).
Shiki's docs have 2 suggested ways of [switching themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md#dark-mode-support),
neither of them were satisfactory to me.

The first suggestion is to use css-variables, which sounds ideal at first but is seems to have massive flaws.
It seems to work with a simplified set of colours; I'm somewhat sure that the Shiki normally uses much more complex detailed themes.
Syntax themes are complex beasts ([default github dark for example](https://github.com/microsoft/vscode/blob/main/extensions/theme-defaults/themes/dark_vs.json)), I'd like use them properly.
So trying to map to a few CSS variables isn't going to work.

The second section was to have render the code block twice, once for each theme, wrapped with a css

.. display none does remove the content for screen readers too.
maybe this is fine.

but need to docuyment how to setup remark to do this.
