import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Header, Form, Segment, Message, List, Pagination } from 'semantic-ui-react';
import { compose } from 'redux';
import axios from 'axios';


class UserTodoList extends Component {
  renderAddTodo = ({ input, meta }) => {
    return (
      <>
        <Form.Input
          { ...input }
          error={meta.touched && meta.error }
          fluid
          autoComplete='off'
          placeholder='Add a todo'
        />
      </>
    )
  }

  render() {
    return (
      //parent tag
      <>
        <Header as='h2' color='teal' textAlign='center' content='Welcome to the todo app' />
        <Form size='large'>
          <Segment stacked>
            <Field
              name='text'
              component={this.renderAddTodo} //declare prior to render

            />
          </Segment>
        </Form>
      </>
    );
  }
}

//decorating with reduxForm
export default reduxForm({ form: 'addUserTodo' })(UserTodoList);
