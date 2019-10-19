import React from 'react';
import Item from './Item';

class List extends React.Component {
  render() {
    var listItemElements = [];

    // REFERENCE (LOOPS WITH JSX): https://flaviocopes.com/react-how-to-loop/

    for (var i = 0; i < this.props.items.length; i++) {
      listItemElements.push(<Item item={this.props.items[i]} removeItemFromList={ () => this.props.removeItemFromList() } />);
    }

    return(
      <div>{listItemElements}</div>
    );
  }
}

export default List;