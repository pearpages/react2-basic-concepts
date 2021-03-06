class Goals extends React.Component {
  input;
  addItem = (e) => {
    e.preventDefault();

    this.props.dispatch(handleAddGoal(
      this.input.value,
      () => this.input.value = ''
    ));
  }

  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal));
  };

  render() {
    return (
      <div>
        <h2>Goals List</h2>
        <input
          type='text'
          placeholder='Add Goal'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List items={this.props.goals} remove={this.removeItem} />
      </div>
    );
  }
}

const ConnectedGoals = ReactRedux.connect((state) => ({
  goals: state.goals
}))(Goals);