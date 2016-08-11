react webpack es6 skeleton
==========================

If you're confused by all the different tutorials out there for react,
this is a good starting point for a boilerplate react, webpack, and es6
setup. This is meant to be easy, so if it's not, let me know. This also
includes bootstrap for quick development.

Quickstart
----------

If you want to get the demo running locally, follow these steps:

- `git clone git@github.com:phouse512/react-es6-skeleton.git`
- `cd react-es6-skeleton`
- `npm install` - this may take a minute or two
- `npm run build` - when you first start, you need to bundle the js the first time
- `npm start` - run the small express server that serves up `index.html`

Some notes on how the project is setup:

- the main `app.js` is the express server that serves up the `index.html` in
  the root directory.
- static assets are stored inside the `public` directory, including the final `bundle.js`
  file produced by webpack.
- express is configured to load assets from `public`, so once you put your css
  or images in there, you can reference their web paths as `static/<your file
  path in public here` when you need it in `index.html`
- if you want to change where webpack puts `bundle.js`, just change the
  `BUILD_DIR` variable inside `webpack.config.js`
- for an example of how to import local modules in your es6 code, look at the
  import inside `src/index.jsx` for the `CommentBox` class
- if you want to dig further, `react-router` is included with a basic rendering
  of the `Home` component, but it's not necessary to understand for now


