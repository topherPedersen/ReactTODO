import React from 'react';
import List from './List';

class Todo extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div>
        <h1>ReactTODO</h1>
        <h2>work in progress?</h2>
        <ol>
          <List items={this.state.items} />
        </ol>
        <button onClick={ () => this.addItemToList() }>Add Item to TODO List</button>
      </div>
    );
  }
}

export default Todo;