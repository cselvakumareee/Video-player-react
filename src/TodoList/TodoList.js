import React, { Component } from "react";
import TodoItems from "../TodoItems/TodoItems";
import validator from "validator";
import VideoPlayer from '../VideoPlayer/VideoPlayer';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }

  addItem(e) {
    let hostName = new URL(this._inputElement.value).host;
    let pathName = new URL(this._inputElement.value).pathname;
    console.log("hostName "+hostName);
    console.log("pathName "+pathName);
    if (
      this._inputElement.value !== "" && hostName === "www.youtube.com" && pathName === "/watch")
     {

      let newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
      this._inputElement.value = "";
    } else {
      alert("Enter proper url");
      this._inputElement.value = "";
    }
    
    //console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {
      //alert("working del");
    let filteredItems = this.state.items.filter((item) => {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  handleMove(key, direction) {
      
     const UP = -1;
     const DOWN = 1;
    const {items} = this.state

    let positionOfItem = items.findIndex((i) => {
      return i.key === key;
    });
    alert(positionOfItem);
    if (positionOfItem < 0) {
      alert("Given item not found.");
    } else if (
      (direction === UP && positionOfItem === 0) ||
      (direction === DOWN && positionOfItem === items.length - 1)
    ) {
      return; // cannot move outside of array
    }
    const item = items[positionOfItem]; // save item for later
    const newItems = items.filter((i) => i.key !== key); // remove item from array
    newItems.splice(positionOfItem + direction, 0, item);

    this.setState({ items: newItems });

    console.log(positionOfItem);
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => {
                this._inputElement = a;
              }}
              placeholder="enter url"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems
          entries={this.state.items}
          delete={this.deleteItem}
          postionChange={this.handleMove}
        />
        
      </div>
    );
  }
}

export default TodoList;
