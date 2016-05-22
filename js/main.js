import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

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
var Checkbox = React.createClass({
  getInitialState: function() {
    return {checked: false}
  },
  handleCheck: function(){
    this.setState({checked: !this.state.checked})
  },
  render: function() {
    var msg; 
      if(this.state.checked) {
        msg = "checked";
      } else {
        msg = "unchecked";
      }
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheck} />
        <p>{msg}</p>
      </div>);
  }
});

var Note = React.createClass({
  getInitialState: function(){
    return {editing: false}
  },

  edit: function() {
    this.setState({editing: true});
  },

  save: function() {
    this.setState({editing: false});
  },

  delete: function() {
    alert('deleting note');
  },

  renderDisplay: function(){
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} 
          id="pencil"><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button onClick={this.delete}
          id="trash"><i className="fa fa-trash" aria-hidden="true"></i></button>
        </span>
      </div>
      );
  },

  renderForm: function(){
    return(
      <div className="note">
        <textarea defaultValue={this.props.children} id="textarea"></textarea>
        <button onClick={this.save} id="save"><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
      </div>
      );
  },

  render: function() {
    if(this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
});

var anchor = document.querySelector('.anchor');

ReactDom.render(<div>
                  <Note>Hello World</Note>
               

                </div>, anchor);

 








