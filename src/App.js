import React, { Component } from 'react'
import Todos from './components/Todos'
import Form from './components/Form';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
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
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.isFormValid === null || this.state.isFormValid === false || !this.state.todo.trim()) {
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
    this.setState({ 
      todo: e.target.value,
      isFormValid: e.target.value ? true : false
    })
  }

  removeTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: todos })
  }

  setCompleted = (id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    this.setState({ todos: todos })
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
