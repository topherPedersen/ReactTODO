import React from 'react';
import Item from './Item';

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
    var listItemElements = [];

    // REFERENCE (LOOPS WITH JSX): https://flaviocopes.com/react-how-to-loop/

    for (var i = 0; i < this.props.items.length; i++) {
      listItemElements.push(<Item item={this.props.items[i]} />);
    }

    return(
      <div>{listItemElements}</div>
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