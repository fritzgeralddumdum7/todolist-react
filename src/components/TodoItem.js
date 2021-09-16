import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    getCompletedStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div className='todolist'>
                <li onClick={this.props.setCompleted.bind(this, id)} style={this.getCompletedStyle()} >{ title }</li>
                <button onClick={this.props.removeTodo.bind(this, id)}>Delete</button>
            </div>
        )
    }
}

// PropTypes
// ensuring that data passed in props matches its data type
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
