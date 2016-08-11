pathfinder
==========

To run, clone and then cd into the directory. Run `npm install` to install the
necessary packages. Once that's done, you can run `npm start` to begin running
the server, and you can navigate to `http://localhost:5000/` to see the page.


react webpack es6 skeleton
--------------------------

As of this commit, this is a good starting point for a boilerplate react,
webpack, and es6 setup. Some notes on how the project is setup:

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


