import React from 'react';

/*
class Item extends React.Component {

  render() {
    var listItemElements = [];

    // REFERENCE (LOOPS WITH JSX): https://flaviocopes.com/react-how-to-loop/

    for (var i = 0; i < this.props.items.length; i++) {
      listItemElements.push(<li>{this.props.items[i]}</li>);
    }

    return(
      <div>{listItemElements}</div>
    );
  }
}
*/

class Item extends React.Component {
  render() {
    return(
      <li>{this.props.item}</li>
    );
  }
}

export default Item;