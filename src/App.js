import React from 'react'
import Todos from './components/Todos'
import Form from './components/Form';

class App extends React.Component {
  // local states
  state = {
    todos: [
      {
        id: 1,
        title: 'Finish todolist on reactapp',
        completed: false
      }, {
        id: 2,
        title: 'Do some laundries',
        completed: false
      }, {
        id: 3,
        title: 'Prepare for tomorrows event',
        completed: false
      }, {
        id: 4,
        title: 'This is a very long to do list where it will be truncated.',
        completed: false
      }
    ],
    todo: '',
    isFormValid: null
  };

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.isFormValid === null) {
      return this.setState({
        isFormValid: false
      })
    }
    this.addNewTodo()
  }

  addNewTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: this.state.todos.length + 1,
          title: this.state.todo,
          completed: false
        }
      ],
      todo: '',
      isFormValid: null
    })
  }

  setTodo = (e) => {
    let value = e.target.value
    this.setState({ 
      todo: value,
      isFormValid: value.length ? true : false
    })
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
      <div className="container">
        <Form 
          todo={this.state.todo}
          handleSubmit={this.handleSubmit}
          setTodo={this.setTodo}
          isFormValid={this.state.isFormValid}
        />
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
