import React from 'react';

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


export default CommentBox;