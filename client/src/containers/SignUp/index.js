import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; // Higher order component HOA
import axios from 'axios';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators'; //validators  

import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';


class SignUp extends Component { //Must define statelss funciton outside of the render()
  onSubmit = async (formValues, dispatch) => {
    try {
      //formvalues looks like this { email: 'someEmail@.com, password: '123456' }
      const { data } = await axios.post('/api/auth/signup', formValues);
      dispatch({ type: AUTH_USER,  payload: data.token })
      this.props.history.push('/counter');
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e })
    }
  }

  
  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        //spread out form props
        {...input}
        error={ meta.touched && meta.error } //error prop {boolean}
        fluid
        icon='user'
        iconPosition='left'
        autoComplete='off'
        placeholder='Email Address'
      />
    );
  }

  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
      {...input}
      error={ meta.touched && meta.error}
      fluid
      type='password'
      icon='lock'
      placeholder='password'
      autoComplete='off'
      iconPosition='left'
      />

    )
  }
  
  //build the form
  render() {
    console.log('inside of signup render', this.props);
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <Form size='large' onSubmit={handleSubmit(this.onSubmit)} >
        <Segment stacked>
          <Field
            name='email'
            component={ this.renderEmail } //this needs to be defined outside of render^
            validate={
              //you can pass an array of validations
              [
                required({ msg: 'Email is required' }), //add settings ie. msg
                email({ msg: 'You must provide a valid email address' })  //is this email?
              ]
            }
          />
          {/* new field */}
          <Field
            name='password'
            component={this.renderPassword}
            validate={
              [
                required({ msg: 'You must provide a password' }),
                //make password be minimum length of 6 using validator
                length({ min: 6, msg: 'Your password must be at least 6 characters long' })
              ]
            } 
          />
          <Button
           content='Sign up'
           color='teal'
           fluid
           size='large'
           type='submit'
           disabled={ invalid || submitting || submitFailed }

          />
        </Segment>
      </Form>
    );
  }
}

const asyncValidate = async formValues => {
  try {
    const { data } = await axios.get(`/api/user/emails?email=${formValues.email}`);
    if (data) {
      throw new Error();
    }
  } catch (e) {
    throw { email: 'Email already exists, please sign up with a different email' };
  }
}

// const asyncValidate = async formValues => {
//   try {
//     const { data } = await axios.get('/api/user/emails');
//     //use some() for object returned { _id: email }
//     const foundEmail = data.some(user => user.email === formValues.email )
//     if(foundEmail) {
//       throw new Error();
//     }
//   } catch (e) {
//     // eslint-disable-next-line no-throw-literal
//     throw { email: 'Email already exists, please sign up with a different Email' };
//   }
// }

export default reduxForm({ form: 'signup', asyncValidate, asyncChangeFields: [ 'email' ] })(SignUp);
