import React from 'react'
import Todos from './components/Todos'

class App extends React.Component {
  // local states
  state = {
    todos: [{
      id: 1,
      title: 'Title 1',
      completed: false
    }, {
      id: 2,
      title: 'Title 2',
      completed: false
    }, {
      id: 3,
      title: 'Title 3',
      completed: false
    }],
    todo: ''
  };

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      todos: [
        ...this.state.todos, {
          id: this.state.todos.length + 1,
          title: this.state.todo,
          completed: false
        }
      ],
      todo: ''
    })
  }

  setTodo = (e) => {
    this.setState({ todo: e.target.value })
  }

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  setCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo
      })
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todo} onChange={this.setTodo} type="text" />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          <Todos 
            todos={this.state.todos}
            removeTodo={this.removeTodo}
            setCompleted={this.setCompleted}
          />
        </ul>
      </div>
    )
  }
}

export default App
