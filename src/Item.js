import React from 'react';

class Item extends React.Component {
  render() {
    return(
      <li>
        {this.props.item}
        &nbsp;
        &nbsp;
        <button onClick={ () => this.props.removeItemFromList(this.props.item) }>Remove</button>
      </li>
    );
  }
}

export default Item;