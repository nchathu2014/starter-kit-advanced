import React ,{Component} from 'react';

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addTodo(this.state.inputText)
    console.log(this.refs.inputRef.value)
    this.setState({
    	 inputText:''
    })
    this.refs.inputRef.focus();

  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type in your todo"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
          ref='inputRef'/>
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default TodoInput