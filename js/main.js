

import React from 'react';
import ReactDom from 'react-dom';

console.log('Hello, World');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
      );
  }
});
var anchor = document.querySelector('.anchor');

ReactDom.render(<HelloWorld />, anchor);




