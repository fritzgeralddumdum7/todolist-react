import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
  render () {
    const { todos } = this.props

    return todos.map(todo => {
        return (
            <TodoItem 
                key={todo.id} 
                todo={todo}
                removeTodo={this.props.removeTodo}
                setCompleted={this.props.setCompleted}
            />
        )
    })
  }
}

// PropTypes
// ensuring that data passed in props matches its data type
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos
