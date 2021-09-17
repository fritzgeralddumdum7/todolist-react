import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
    render () {
        const ErrorMessage = () => {
            return <p className="error-msg">This field is required.</p>
        }

        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input className="todo-input" value={this.props.todo} onChange={this.props.setTodo} type="text" />
                    <input className="add-todo-btn" type="submit" value="Submit" />
                </form>
                { this.props.isFormValid === false && <ErrorMessage /> }
            </div>
        )
  }
}

Form.propTypes = {
    todo: PropTypes.string.isRequired
}

export default Form
