import React from 'react';
import List from './List';
import './Todo.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  removeItemFromList(itemToBeRemoved) {
    // Create a new array which will contain an updated
    // version of our todo list items excluding the 'itemToBeRemoved'
    var newList = new Array();
    // Loop through the previous version of the todo-list
    // comparing all items in the list with the 'itemToBeRemoved'
    var numberOfItems = this.state.items.length;
    for (var i = 0; i < numberOfItems; i++) {
      // If the item from the previous todo-list does not match
      // the 'itemToBeRemoved', add it to the new todo-list
      if (this.state.items[i] !== itemToBeRemoved) {
        var indexOfNextItem = newList.length;
        newList[indexOfNextItem] = this.state.items[i];    
      }
    }
    // Replace the old todo-list with the new todo-list
    // which excludes the 'itemToBeRemoved'
    this.setState({
      items: newList,
    });
  }

  render() {
    return (
      <Router>
        <div>

          <h1>React TODO List App</h1>

          <nav>
            <ul>
              <li>
                <Link to="/">TODO List</Link>
              </li>
              <li>
                <Link to="/dankmemes">Dank Memes</Link>
              </li>
              <li>
                <Link to="/catvideos">Cat Videos</Link>
              </li>
            </ul>
          </nav>

          <Switch>

            <Route path="/dankmemes">
              <DankMemes />
            </Route>

            <Route path="/catvideos">
              <CatVideos />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>

        </div>
      </Router>
    );
  }
}

function Home() {
  return <h3>Todo List Goes Here</h3>;
}

function DankMemes() {
  return <h3>Dank Memes Go Here</h3>;
}

function CatVideos() {
  return <h3>Cat Videos Go Here</h3>;
}

/*

              <ol>
                <List 
                  items={this.state.items} 
                  removeItemFromList={ (itemToBeRemoved) => this.removeItemFromList(itemToBeRemoved) } 
                />
              </ol>
              <button onClick={ () => this.addItemToList() }>Add Item to List</button>
*/

export default Todo;