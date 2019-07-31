import React, { Component } from "react";
import Moment from 'moment';
import TimeField from 'react-simple-timefield';

class Todos extends Component{
  constructor() {
    var a = Moment();
    var b = Moment(a);
    b.add(1, "h");

    super();
    this.state = { 
      todos: [],
      time: a.format("hh:mm"),
      tdue: b.format("hh:mm")
    };

    // to bind input changes
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onTdueChange = this.onTdueChange.bind(this);
  }

  // to tweak with timeInput
  onTimeChange(time) {
    this.setState({time});
  }

  // to tweak with tdue input
  onTdueChange(tdue) {
    this.setState({tdue});
  }

  // function to add todos
  addTodo = (e) => {
    e.preventDefault();

    let time = this.refs.time.value;
    let tdue = this.refs.tdue.value;
    let activity = this.refs.activity.value;

    if(activity.trim() === ""){
      // alert user if activity empty
      alert("activty should not be left empty");

    } else {
      this.state.todos.push({time, tdue, activity});

      //update array
      this.setState({ todos: this.state.todos });

      //reset forms
      this.refs.form.reset();
    }
  }

  // function to remove todos
  removeTodos = (i) => {
    this.state.todos.splice(i, 1);
    this.setState({ todos: this.state.todos });
  }

  render(){
    const {time} = this.state;
    const {tdue} = this.state;
    const timeStyle = {
      width: '6%',
      text: 'center',
    };

    return(
        <div>
          <form ref="form" className="form-inline justify-content-center" >
            <TimeField 
              value={time} 
              onChange={this.onTimeChange} 
              input={ <input type="text" ref="time" className="form-control" />}
              style={ timeStyle }
            />
            ~
            <TimeField 
              value={tdue}
              onChange={this.onTdueChange}
              input={ <input type="text" ref="tdue"className="form-control" />}
              style={ timeStyle } 
            /> 
            :
            <input type="text" ref="activity" placeholder="activity" className="form-control" style={{ width: '50%' }} required/>
            <button onClick={this.addTodo} className="btn btn-primary" >Add</button>
          </form>
          <hr />
          <div>
            <ul className="list-group list-group-flush">
                {this.state.todos.map((data, i) => 
                  <li key={i} className="list-group-item">
                    <button onClick={() => this.removeTodos(i)} className="btn btn-outline-danger" style={{ marginRight: '0.5rem' }}>Delete</button>
                    {data.time} ~ {data.tdue} : {data.activity}
                  </li>  
                )}
            </ul>
          </div>
        </div>
      );
  }
}

export default Todos;