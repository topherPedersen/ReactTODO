import React from 'react';
import Item from './Item';

class List extends React.Component {
  render() {

    // Create empty array to hold our <Item/> elements
    var listItemElements = [];
    
    // Loop through this.props.items and create <Item/> elements for
    // each item on the todo list
    // REFERENCE (LOOPS WITH JSX): https://flaviocopes.com/react-how-to-loop/
    for (var i = 0; i < this.props.items.length; i++) {
      listItemElements.push(<Item 
                              item={this.props.items[i]} 
                              removeItemFromList={ (itemToBeRemoved) => this.props.removeItemFromList(itemToBeRemoved) }
                            />);
    }

    // Return array of <Item/> elements to be rendered
    return(
      <div>{listItemElements}</div>
    );
  }
}

export default List;