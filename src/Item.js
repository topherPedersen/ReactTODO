import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>
        {this.props.item}
        &nbsp;
        &nbsp;
        <button onClick={ () => alert(this.props.item) }>Remove</button>
      </li>
    );
  }
}

export default Item;