import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }
  render () {
    const {
        todos,
        setCompleted,
        removeTodo
    } = this.props

    const ListEmpty = () => {
      return (
        <div className="todolist center">
          <li>No items left</li>
        </div>
      )
    }

    return (
        todos.length ? todos.map(todo => {
          return (
            <TodoItem 
              key={todo.id} 
              todo={todo}
              removeTodo={removeTodo}
              setCompleted={setCompleted}
            />
          )
        }) : <ListEmpty />
    )
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos
