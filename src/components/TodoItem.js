import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    getCompletedStyle = (completed) => {
        return {
            textDecoration: completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo
        return (
            <div className='todolist'>
                <li 
                    onClick={this.props.setCompleted.bind(this, id)} 
                    style={this.getCompletedStyle(completed)}>
                    {title}
                </li>
                <button 
                    className="delete-btn"
                    onClick={this.props.removeTodo.bind(this, id)}>
                    Delete
                </button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
