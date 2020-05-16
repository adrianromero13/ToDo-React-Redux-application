import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getAllTodos } from './../../actions/todos';
import moment from 'moment'; //




class AllTodosList extends Component {

  componentDidMount() {
    this.props.getAllTodos();
  }

  render() {
    return (
      <List celled selection animated size='huge'> {/* selection has a hover effect built in, celled property adds borders around the list items   */}
        <List.Item>
          <List.Content>
            <List.Header>Some future todo</List.Header>
            <List.Description>Created: {moment().fromNow()}</List.Description> {/* pastes the time ...time stamp */}
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

function mapStateToProps(state) {
  //allTodos = prop name
  return { allTodos: state.todos.allTodos, getAllTodosError: state.todos.getAllTodosError }; // get errors
}

export default connect(mapStateToProps, { getAllTodos })(AllTodosList);
