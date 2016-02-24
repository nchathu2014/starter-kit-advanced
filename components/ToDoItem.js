import React,{Component} from 'react';


class ToDoItem extends Component{

	handleComplete(){
		this.props.actions.completeTodo(this.props.todo.id);
	}

	handleDelete(){
		this.props.actions.deleteTodo(this.props.todo.id);
	}

	render(){
		return(
				<div style={{borderBottom:'1px solid #cccccc',paddingBottom:10}}>
					<li>{this.props.todo.text}</li>
					<button onClick={this.handleComplete.bind(this)}>Mark this complete</button>
					<button onClick={this.handleDelete.bind(this)}>Delete Todo</button>
				</div>
		);
	}
}

export default ToDoItem