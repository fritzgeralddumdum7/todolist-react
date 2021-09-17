import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
    constructor (props) {
        super(props)
        this.props = props
    }
    
    render () {
        const {
            todo,
            isFormValid,
            handleSubmit,
            setTodo
        } = this.props

        const ErrorMessage = () => {
            return <p className="error-msg">This field is required.</p>
        }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="todo-input" value={todo} onChange={setTodo} type="text" />
                    <input className="add-todo-btn" type="submit" value="Submit" />
                </form>
                { isFormValid === false && <ErrorMessage /> }
            </div>
        )
    }
}

Form.propTypes = {
    todo: PropTypes.string.isRequired
}

export default Form
