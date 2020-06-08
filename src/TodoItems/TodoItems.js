import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
    
  }

  createTasks(item) {
    return (
      <li key={item.key}>
        {item.text}
        
        <span onClick={()=>{this.postionChange(item.key, -1)}}> up</span> 
        <span onClick={()=>{this.postionChange(item.key, 1)}}> down</span>
        
        <span
          onClick={() => {
            this.delete(item.key);
          }}
        >
          {" "}
          &#10006;
        </span>
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  postionChange(key, direction){
      this.props.postionChange(key, direction);
  }
  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
