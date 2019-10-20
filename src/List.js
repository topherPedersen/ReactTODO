import React from 'react';
import Item from './Item';

class List extends React.Component {
  render() {
    var listItemElements = [];

    var itemName = "WILLY NILY!!!!";

    // REFERENCE (LOOPS WITH JSX): https://flaviocopes.com/react-how-to-loop/

    for (var i = 0; i < this.props.items.length; i++) {
      //var Item = <Item item={this.props.items[i]} />
      listItemElements.push(<Item 
                              item={this.props.items[i]} 
                              removeItemFromList={ (itemToBeRemoved) => this.props.removeItemFromList(itemToBeRemoved) }
                            />);
    }

    return(
      <div>{listItemElements}</div>
    );
  }
}

export default List;