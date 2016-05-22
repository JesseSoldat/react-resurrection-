import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

console.log('Hello, World');

// $(document).ready(function() {
//     alert($('.anchor').attr('id')); }); 


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
        <p>{this.props.children}</p>
      </div>
      );
  }
});

var Note = React.createClass({
  render: function() {
    return (
      <div className="note">
        <p>Note</p>
        <button id="pencil"><i className="fa fa-pencil" aria-hidden="true"></i></button>
        <button id="trash"><i className="fa fa-trash" aria-hidden="true"></i></button>
      </div>
      );
  }
});

var anchor = document.querySelector('.anchor');

ReactDom.render(<div>
                  <HelloWorld />
                  <MyComponent text="Hello World"/>
                  <MyComponent text="How are you?">I am fine</MyComponent>
                  <MyComponent text="Goodbye"/>
                  <Note />

                </div>, anchor);

 








