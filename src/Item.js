import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    // this.props.removeItemFromList = this.removeItemFromList.bind(this);
    // this.removeItemFromList = this.props.removeItemFromList.bind(this);
    //this.removeItemFromList = this.props.removeItemFromList.bind(this);
  }

  render() {
    return(
      <li>
        {this.props.item}
        &nbsp;
        &nbsp;
        <button onClick={ () => alert(this.props.itemName) }>Remove</button>
      </li>
    );
  }
}

export default Item;