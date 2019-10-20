import React from 'react';
import List from './List';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    //this.removeItemFromList = this.removeItemFromList.bind(this);
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

  removeItemFromList(itemToBeRemoved) {
    alert(itemToBeRemoved);
    alert(this.state.items[0]);
  }

  render() {
    return (
      <div>
        <h1>React TODO List App</h1>
        <ol>
          <List 
            items={this.state.items} 
            removeItemFromList={ (itemToBeRemoved) => this.removeItemFromList(itemToBeRemoved) } 
          />
        </ol>
        <button onClick={ () => this.addItemToList() }>Add Item to List</button>
      </div>
    );
  }
}

export default Todo;