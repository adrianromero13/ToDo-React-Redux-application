//dumb component, doesn't care about state
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default (props) => (
  <Menu width={4}>
    <Menu.Item as={Link} to='/' content='Sign Up'/>
    <Menu.Item as={Link} to='/signin' content='Sign In'/>
    <Menu.Item as={Link} to='/counter' content='Counter'/>
    <Menu.Item as={Link} to='/allTodos' content='Get All Todos'/>
  </Menu>
);
