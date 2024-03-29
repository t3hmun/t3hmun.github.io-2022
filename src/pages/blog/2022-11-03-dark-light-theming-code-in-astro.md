---
layout: "../../layouts/BlogPost.astro"
title: "Dark Light Theming Code in Astro"
description: "Good light and dark theming for code blocks generated from markdown wasn't as straight forward as I'd hoped."
pubDate: "2022-11-30T23:30:00Z"
---

## What

Setting separate syntax highlighting themes for dark and light themes on my Astro generated website.

## Shiki's Suggested Solutions

The default syntax highlighter Astro uses on markdown is [Shiki](https://github.com/shikijs/shiki).
Shiki's docs have 2 suggested ways of [switching themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md#dark-mode-support),
neither of them were satisfactory to me.

The first suggestion is to use css-variables, which sounds ideal, however the css theme is just a few colours.
The stylesheets and language definitions that make up syntax themes are more than just a few colours, this seems like a simplification.

The second suggestion is to render the code twice, once for each theme, hiding one with css.
Trying to set that up requires messing with Astro's markdown integration, it isn't obvious how to achieve this.
I don't want to spend time messing around with that.

## My Solution

Configure Astro to use Prism instead of Shiki for syntax highlighting.

```json
// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: "prism",
  },
});
```

Download 2 Prism themes, name them `syntax-dark.css` and `syntax-light.css`, add one of the css files in the head

```html
<link id="syntax-highlight-css" rel="stylesheet" href="/syntax-dark.css" />
```

Update my theme changing script to swap the stylesheets when the theme is toggled.

This script does a few things

- Defaults the theme to the OS preference via the `prefers-color-scheme` css feature
- Saves the chosen theme to localStorage unless it matches the OS preference
- Adds or removes the dark class from the page - this is used by Tailwind for most the page styles
- Changes the syntax highlighting stylesheet
- Add an onclick event to every element on the page matching a query selector

```ts
const dark = "dark";
const light = "light";
const key = "theme";
const cssId = "syntax-highlight-css";

activateTheme();

document.querySelectorAll('[id^="toggle-theme"]').forEach((element) => {
  element.onclick = () => {
    toggleTheme();
  };
});

/** Set the CSS to activate whatever theme is set in localStorage.theme or CSS media. */
function activateTheme() {
  const theme = getLocalTheme() ?? getCssTheme() ?? defaultTheme;
  if (theme === dark) {
    document.documentElement.classList.add(dark);
    document.getElementById(cssId).setAttribute("href", "/syntax-dark.css");
  } else {
    document.documentElement.classList.remove(dark);
    document.getElementById(cssId).setAttribute("href", "/syntax-light.css");
  }

  // Clear local storage if user's computer settings match the current stored setting.
  // Only want to keep a setting persisted while it is differnt from the user's settings.
  if (theme === getCssTheme()) {
    localStorage.removeItem(key);
  }
}

/** Toggle the current theme and set it to persist if it does not match the computer setting. */
function toggleTheme() {
  const localTheme = getLocalTheme();
  const cssTheme = getCssTheme();
  const current = localTheme ?? cssTheme ?? defaultTheme;

  const theme = current === light ? dark : light;

  if (theme === cssTheme) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, theme);
  }

  activateTheme();
}

function getCssTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return dark;
  if (window.matchMedia("(prefers-color-scheme: light)").matches) return light;
  return null;
}

function getLocalTheme() {
  if (localStorage.getItem(key) === dark) return dark;
  if (localStorage.getItem(key) === light) return light;
  return null;
}
```
