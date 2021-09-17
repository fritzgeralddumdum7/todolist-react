import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor (props) {
        super(props)
        this.props = props
    }

    getCompletedStyle = (completed) => {
        return {
            textDecoration: completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {
            todo,
            setCompleted,
            removeTodo
        } = this.props
        const { 
            id, 
            title, 
            completed 
        } = todo
        
        return (
            <div className='todolist'>
                <li 
                    onClick={setCompleted.bind(this, id)} 
                    style={this.getCompletedStyle(completed)}>
                    {title}
                </li>
                <button 
                    className="delete-btn"
                    onClick={removeTodo.bind(this, id)}>
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
