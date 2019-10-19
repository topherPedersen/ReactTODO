import React from 'react';

class List extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      items: new Array(), 
    };
  }
  */

  render() {
    return(
      <li>eeeeeeep! li</li>
    );
  }

  /*
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
  */

  /*
  render() {
    return (
      <div>
        <h1>ReactTODO</h1>
        <h2>work in progress?</h2>
        <ol>
          <Items />
        </ol>
        <button onClick={ () => this.addItemToList() }>Add Item to TODO List</button>
      </div>
    );
  }
  */
}

export default List;