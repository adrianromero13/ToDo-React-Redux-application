import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react';

import moment from 'moment'; //




class AllTodosList extends Component {
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

export default AllTodosList;
