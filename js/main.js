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

  componentWillMount: function() {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150) + 'px',
      top: this.randomBetween(0, window.innerHeight - 150) + 'px',
      transform: 'rotate(' + this.randomBetween(-10, 10) + 'deg)'
    };
  },

  randomBetween: function(min, max) {
    return (min + Math.ceil(Math.random() * max))
  },

  edit: function() {
    this.setState({editing: true});
  },

  save: function() {
    var val = this.refs.newText.value;
    console.log(val);
    this.props.onChange(val, this.props.index);
    this.setState({editing: false});
  },

  delete: function() {
    this.props.onRemove(this.props.index);
  },

  renderDisplay: function(){
    return (
      <div className="note" style={this.style}>
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
      <div className="note" style={this.style}>
        <textarea ref="newText" defaultValue={this.props.children} id="textarea"></textarea>
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

var Board = React.createClass({

  propTypes: {
    count: function(props, propName) {
      if (typeof props[propName] !== 'number'){
        return new Error('The count property must be a number');
      } 
      if (props[propName] > 100) {
        return new Error("Creating " + props[propName] + " notes is ridiculous")
      }
    }
  },

  getInitialState: function() {
    return {
      notes: [
      // 'Learn Node',
      // 'Learn React',
      // 'Learn Angular',
      // 'Get a job',
      // 'Enjoy life'
      ]
    };
  },

  nextId: function() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  },

  addNote: function(text) { 
    var arr = this.state.notes;
    arr.push({
      id: this.nextId(),
      note: text
    });
    this.setState({notes: arr});
  },

  update: function (newText, i) {
    var arr = this.state.notes;
    arr[i].note = newText;
    this.setState({notes: arr});
  },

  remove: function(i) {
    var arr = this.state.notes;
    arr.splice(i, 1);
    this.setState({notes: arr});
  },

  eachNote: function(note, i) {
    return (
        <Note key={note.id} 
              index={i} 
              onChange={this.update} 
              onRemove={this.remove} 
              >
          {note.note}
        </Note>
      );
  },
  
  

  render: function() {
    return (<div className="board">
              {this.state.notes.map(this.eachNote)}
              <button id="addBtn" onClick={this.addNote.bind(null, "New Note")}><i className="fa  fa-2x fa-plus-square" aria-hidden="true"></i></button>
          </div>
          );
  }
});

var anchor = document.querySelector('.anchor');

ReactDom.render(<div>
                  <Board count={1}/>
                </div>, anchor);

 








