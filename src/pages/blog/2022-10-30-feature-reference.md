---
layout: "../../layouts/BlogPost.astro"
title: "Feature Reference"
description: "A test page of everything that can be output when writing pages for this website in markdown."
pubDate: "2022-11-02T23:30:00Z"
---

## What

This is not an article, this is here for testing markdown -> article output and seeing how well my css works.

## Notes

A few general rules for writing new markdown blog posts make thing work well:

- For the sake of consistency and nice sorting in file manager the post's file name should use the format: `yyyy-MM-dd-lower-case-title.md`.
- Every post should start with a front-matter block similar to:

```md
---
layout: "../../layouts/BlogPost.astro"
title: "Feature Reference"
description: "A test page of everything that can be output when writing pages for this website in markdown."
pubDate: "2022-11-02T23:30:00Z"
---
```
- The layout is always the same (so far), one day I'll code it as a default.
- The title will be the one and only `h1` of the page (unless the post uses multiple `h1`s, but that should not be done).
- The description is the only optional field, it is used in indexes / sets of links ot posts.
- The pubDate should be written in [ISO 8601 UTC](https://en.wikipedia.org/wiki/ISO_8601) format, I'm used to it and the computer always understands it correctly.


## Headings

See the top of the page for the `h1`. As a general rule I only ever have a single `h1` on any page, it is the title and start of the main content. 
The heading directly above this text should be a `h2`.

The text under every heading is a demonstration of a paragraph of text, a `p` tag.

Headings fill the full content-width space. 
This is wider than the paragraphs of text which are restricted to reading-width.

### Header 3

Johannes Gensfleisch zur Laden zum Gutenberg (/ˈɡuːtənbɜːrɡ/; c. 1400 – 3 February 1468) was a German inventor, printer, publisher, and goldsmith who introduced printing to Europe with his mechanical movable-type printing press. 

His work started the Printing Revolution in Europe and is regarded as a milestone of the second millennium, ushering in the modern period of human history.

#### Header 4

Across Europe, the increasing cultural self-awareness of its people led to the rise of proto-nationalism, accelerated by the flowering of the European vernacular languages to the detriment of Latin's status as lingua franca. In the 19th century, the replacement of the hand-operated Gutenberg-style press by steam-powered rotary presses allowed printing on an industrial scale, while Western-style printing was adopted all over the world, becoming practically the sole medium for modern bulk printing.

##### Header 5

The relatively unrestricted circulation of information—including revolutionary ideas—transcended borders, captured the masses in the Reformation, and threatened the power of political and religious authorities; the sharp increase in literacy broke the monopoly of the literate elite on education and learning and bolstered the emerging middle class.

###### H6

Witness, a `h6` which is still bigger than normal text. I think I once wrote an article with 5 levels of headings. I don't really remember but it probably wasn't good.

## Block Widths

<p class="content-width"> This is a block of text using the full content width. This is too wide for large blocks of text intended for normal reading. This is here as a demonstration, but custom html blocks should not be used for paragraphs of text.</p>

<p class="middle-width"> This is a block of text using the middle width. This is still too wide for large blocks of text intended for normal reading. This is here as a demonstration, but custom html blocks should not be used for paragraphs of text.</p>

This is a normal block of text using the default reading-width.
This is meant to be the right width for easy reading of large amounts of text.

## Images

TODO: Sample images

- A default image using pure markdown
- Using some custom css:
  - A small image shown at true size, less wide than the normal reading text area.
  - An image that fill the width of the reading text, scale with it.
  - An image that fills the middle-width area and scales with it.
  - An image that fills the content width area and scale with it.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

You may notice that the code blocks use the full content width.
Code often needs the extra horizontal space.
There is no shortage of code that greatly exceeds 80 characters a line. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
