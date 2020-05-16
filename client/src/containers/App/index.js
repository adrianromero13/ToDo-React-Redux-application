//turning into class based component
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

//practice
// import { connect } from 'react-redux';

import Counter from '../Counter';
import AllTodosList from '../AllTodosList';
import Navbar from './../../components/Navbar';
import SignUp from '../SignUp';

class App extends Component {
  render () {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          {/* build a navbar to navigate through pages */}
          <Navbar/>
          {/* <p>{ this.props.counter }</p>  the way to set up HOC (Higher Order Component) to place state in any component */}
          <Route exact path='/counter' component={Counter}/>
          <Route exact path='/alltodos' component={AllTodosList}/>
          <Route exact path='/' component={SignUp}/>
        </Grid.Column>
      </Grid>
    );
  }
}


// function mapStateToProps(state) {
  //   return { counter: state.counter };
  
  // }
// export default connect(mapStateToProps)(App);
  
export default App;
