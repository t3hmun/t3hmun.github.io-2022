# t3hmun personal website

Personal website, published statically on GitHub with custom domain.

Publishes on push via github actions.

I've tried to roll my own software to do this many time, mainly just a route to learn something.
This time I'm making this to be simple and maintainable.. to start with anyway.


## Editing

`npm run dev` to run astro dev server.

If the sass needs modifying then also run `npm run sass-dev`, but don't commit the generated css until `npm run sass-build` has been run.
The Sass is not meant to be edited often, it is just a base style, a source of consistency.
All unique styles can be done inline, with Astro supports that nicely.
