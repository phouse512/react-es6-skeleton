import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';

import { Router, Route, Link, browserHistory } from 'react-router';

var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function() {
    var md = new Remarkable();
    return (
      <div classNameName="comment">
        <h2 classNameName="commentAuthor">
          { this.props.author }
        </h2>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />     
      </div>

    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div classNameName="commentList">
        <Comment author="Philip House">This is a comment</Comment>
        <Comment author="John Doe">This is *another* comment</Comment>
      </div>
    )
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div classNameName="commentForm">
        Hello, world! I am commentForm
      </div>
    )
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div classNameName="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var Navbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <div className="collapse navbar-toggleable-xs">
          <a className="navbar-brand" href="#">PathFinder</a>
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Navbar}>
    </Route>
  </Router>
), document.getElementById('content'));
