//turning into class based component
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import Counter from '../Counter';
import Navbar from './../../components/Navbar';

class App extends Component {
  render () {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          {/* build a navbar to navigate through pages */}
          <Navbar/>
          <Route exact path='/counter' component={Counter}/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;


// import React from 'react';

// export default (props) => (
//   <div>
//     I am the app component!!!
//     { props.children }
//   </div>
// );
