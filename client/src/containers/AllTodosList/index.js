import React, { Component } from 'react';
import { List, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getAllTodos } from './../../actions/todos';
import moment from 'moment'; //




class AllTodosList extends Component {

  componentDidMount() {
    this.props.getAllTodos();
  }

  renderList = () => {
    if (this.props.allTodos.length === 0) {
      return < Header content='No todos yet' />
    } else {
      return this.props.allTodos.map(({ _id, text, dateCreated }) => { //destructuring the data 
        return (
          <List.Item key={_id}>
            <List.Content>
              <List.Header>{text}</List.Header>
              <List.Description>{moment(dateCreated).fromNow()}</List.Description>
            </List.Content>
          </List.Item>
        );
      });
    }
  }

  render() {
    return (
      <List celled selection animated size='huge'> {/* selection has a hover effect built in, celled property adds borders around the list items   */}
        { this.props.getAllTodosError ? <Message negative header={ this.props.getAllTodosError } /> : null }
        { this.renderList() }
      </List >
    );
  }
}

function mapStateToProps(state) {
  //allTodos = prop name
  return { allTodos: state.todos.allTodos, getAllTodosError: state.todos.getAllTodosError }; // get errors
}

export default connect(mapStateToProps, { getAllTodos })(AllTodosList);
