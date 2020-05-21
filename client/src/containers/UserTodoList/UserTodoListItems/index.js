import React from 'react';
import { Header, List, Button } from 'semantic-ui-react';

//using an if statement so use {}
export default (props) => {
  if (props.todos.length === 0) {
    return <Header content='No todos yet, please add a todo' />
  }
  else {
    return props.todos.map(({ _id, completed, text }) => { // this (todo) is an object
      return (
        //this top level component needs to have a key prop
        <List.Item kkey={_id}>
          <List.Content floated='left'>
            {/* in case completed is true, set text decoration 'line-through', otherwise we want no textDecoration */}
            <p style={{ textDecoration: completed ? 'line-through' : 'none', fontSize: '20px' }} >{text}</p>
          </List.Content>
          <List.Content floated='right'>
            <Button
              color='blue'
              content='Mark Complete'
              size='small'
            />
          </List.Content>
        </List.Item>
      );
    });
  }
};
