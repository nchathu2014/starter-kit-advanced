import React,{Component} from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './redux/actions';

class App extends Component{

	constructor(props,context){
		super(props,context);
				
	}

	render(){
		return(
			<div>

				<ToDoInput addTodo={this.props.actions.addTodo}/>
				<ToDoList actions={this.props.actions} todos={this.props.todos}/>
				
			</div>
		);
	}
}

function mapToProps(state){
	return state;   //state.todos
}

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}

export default connect(mapToProps,mapDispatchToProps)(App)
