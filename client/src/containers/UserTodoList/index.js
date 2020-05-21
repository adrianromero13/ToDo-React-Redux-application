import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Header, Form, Segment, Message, List, Pagination, Button } from 'semantic-ui-react';
import { compose } from 'redux';
import axios from 'axios';

import { getUserTodos } from './../../actions/todos';
import { ADD_TODO_ERROR } from './../../actions/types';


class UserTodoList extends Component {
  onSubmit = async (formValues, dispatch) => {
    try {
      // formvalues = { text: 'whatever' } = req.body.text
      //post request takes 3 params (link, what parameters you want to send to server, values (in this case a token for authentication))
      await axios.post('/api/user/todos', formValues, { headers: { 'authorization': localStorage.getItem('token') } });
      this.props.getUserTodos();
    } catch (e) {
      ;
    }
  }

  componentDidMount() {
    this.props.getUserTodos();
  }

  renderAddTodo = ({ input, meta }) => {
    return (
      <>
        <Form.Input
          {...input}
          error={meta.touched && meta.error}
          fluid
          autoComplete='off'
          placeholder='Add a todo'
        />
      </>
    )
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      //parent tag
      <>
        <Header as='h2' color='teal' textAlign='center' content='Welcome to the todo app' />
        <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
          <Segment stacked>
            <Field
              name='text'
              component={this.renderAddTodo} //declare prior to render

            />
            <Button
            // this will just use the form's onSubmit function when submit button is clicked
              type='submit'
              fluid
              color='teal'
              content='Add a Todo'
            />
          </Segment>
        </Form>
      </>
    );
  }
}

// function matStateToProps(state) {
//   return {
//     todos: state.todos.userTodos,
//     clientError: state.todos.getUserTodosClientError,
//     serverError: state.todos.getUserTodosServerError
//   };
// }

// 
function mapStateToProps({ todos: { userTodos, getUserTodosServerError, getUserTodosClientError } }) {
  return {
    todos: userTodos,
    clientError: getUserTodosClientError,
    serverError: getUserTodosServerError
  };
}

// 1st way
// export default reduxForm({ form: 'addTodo' })(connect(mapStateToProps, { getUserTodos })(UserTodoList));

// 2nd way
// const composedComponent = connect(mapStateToProps, { getUserTodos })(UserTodoList);
// export default reduxForm({ form: 'addTodo'})(composedComponent);

// 3rd way
export default compose(
  reduxForm({ form: 'addTodo' }),
  connect(mapStateToProps, { getUserTodos })
)(UserTodoList);
