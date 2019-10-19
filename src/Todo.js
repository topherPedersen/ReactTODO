import React from 'react';
import List from './List';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.removeItemFromList = this.removeItemFromList.bind(this);
    this.state = {
      items: new Array(), 
    };
  }

  addItemToList() {
    var newItem = prompt("Add entry to list: ");
    var newList = this.state.items.slice();
    var lengthOfTodoList = newList.length;
    var indexOfNextItem = lengthOfTodoList;
    newList[indexOfNextItem] = newItem;
    this.setState({
      items: newList,
    });
  }

  removeItemFromList(itemName) {
    /*
    if (itemName) {
      alert("remove item from list: " + itemName);
    } else {
      alert("remove something?");
    }
    */
    alert(itemName);
  }

  render() {
    return (
      <div>
        <h1>React TODO List App</h1>
        <ol>
          <List items={this.state.items} removeItemFromList={ () => this.removeItemFromList() } />
        </ol>
        <button onClick={ () => this.addItemToList() }>Add Item to List</button>
        <br/>
        <button onClick={ () => this.removeItemFromList("eeep") }>Test Function</button>
        
      </div>
    );
  }
}

export default Todo;