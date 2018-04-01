/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';

import Login from './src/pages/Login';
import ListView from './src/pages/ListView';

export default class ReactNativeCommonScreens extends Component {

  state = {
  isLoggedIn: false,
  }
  
  render() {
    if (this.state.isLoggedIn)
      return <ListView/>;
    else
      return <Login
      onLoginPress={() => this.setState({isLoggedIn: true})}
    />;
  }
  
}

