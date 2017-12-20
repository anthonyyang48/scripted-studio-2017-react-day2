/*global React*/
/*global ReactDOM*/

//Part One: Implement the TODO App from here: https://goo.gl/vySbPk
//Part Two: Add a delete button to each list element.

function List(props) {
    //TODO: Create list from props.
    return (<ul> {props.items}
    </ul>);
};

var App = React.createClass({
  getInitialState: function() {
    //TODO: Set the initial state.
    return {
        term: '',
        items: []
    };
  },
  onChange: function(event) {
    this.setState()
    //TODO: Save current value in input field.
  },
  onSubmit: function(event) {
      //TODO: Add to list.
  },
  render: function() {
    //TODO: Add event handlers to input and button.
    return (
      <div>
        <h2>Todo List</h2>
        <form className="App" onSubmit={this.onSubmit}>          
        <input onChange={this.onChange}/>
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);