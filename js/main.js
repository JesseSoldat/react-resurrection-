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


var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
      );
  }
});

var anchor = document.querySelector('.anchor');

ReactDom.render(<div>
                  <HelloWorld />
                  <MyComponent text="Hello World"/>
                  <MyComponent text="How are you?"/>
                  <MyComponent text="Goodbye"/>

                </div>, anchor);




