class Todos extends React.Component {
  input;
  addItem = (e) => {
    e.preventDefault();

    this.props.store.dispatch(handleAddTodo(
      this.input.value,
      () => this.input.value = ''
    ));
  }

  removeItem = (todo) => {
    this.props.store.dispatch(handleDeleteTodo(todo));
  };

  toggleItem = (id) => {
    this.props.store.dispatch(handleToggle(id));
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <input
          type='text'
          placeholder='Add Todo'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    );
  }
}