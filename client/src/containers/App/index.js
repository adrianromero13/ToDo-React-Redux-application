//turning into class based component
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';


//practice
import { connect } from 'react-redux';

import Navbar from './../../components/Navbar';
import Counter from '../Counter';

import AllTodosList from '../AllTodosList';
import UserTodoList from '../UserTodoList';

import SignUp from '../SignUp';
import SignOut from '../SignOut';
import SignIn from '../SignIn';

class App extends Component {
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          {/* build a navbar to navigate through pages  and authenticated using token passed down from state as props*/}
          <Navbar isLoggedIn={this.props.authenticated} />

          {/* <p>{ this.props.counter }</p>  the way to set up HOC (Higher Order Component) to place state in any component */}
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/alltodos' component={AllTodosList} />
          <Route exact path='/usertodos' component={UserTodoList} />
          <Route exact path='/' component={SignUp} />
          <Route exact path='/signOut' component={SignOut} />
          <Route exact path='/signIn' component={SignIn} />
        </Grid.Column>
      </Grid>
    );
  }
}

//HOC = now we have access to auth (token authentication) in the App folder rendering the routes passed down as state
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}


export default connect(mapStateToProps)(App);
