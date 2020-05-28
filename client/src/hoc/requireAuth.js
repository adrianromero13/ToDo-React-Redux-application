import React, { Component } from './node_modules/react';
import { connect } from './node_modules/react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway = () => {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }
  //create a function that takes component and returns brand new component
  return connect(mapStateToProps)(ComposedComponent);
}

//how you would require 
// requireAuth(Counter);
