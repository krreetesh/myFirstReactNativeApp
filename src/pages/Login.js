
'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    secureTextEntry,
    Button,
    TouchableHighlight,
    Alert,
    ScrollView
} from 'react-native';

type Props = {};
export default class Login extends Component<Props> {
    
    _onPress() {
        Alert.alert('Cancel');
    }
    
    state = {
        username: '',
        password: '',
    }
    
    render() {
        return (
                
                <View style={styles.container}>
                
                <Text style={styles.textLabel}>Username or Email</Text>
                <TextInput style={styles.textInput}
                value={this.state.username}
                onChangeText={ (username) => this.setState({username}) }
                />
                
                <Text style={styles.textLabel}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.textInput}
                value={this.state.password}
                onChangeText={ (password) => this.setState({password}) }
                />
                
                <TouchableHighlight style={styles.primaryButton} onPress={this._submitLoginForm}>
                                <Text style={styles.buttonWhiteText}> Sign In </Text>
                                </TouchableHighlight>
                <TouchableHighlight style={styles.cancelButton} onPress={this._onPress}>
                                <Text style={styles.buttonBlackText}> Cancel </Text>
                                </TouchableHighlight>
                </View>
                
                        );
    }
    
    _submitLoginForm = () => {
        const { username, password } = this.state
        
        // do some stuff here…
        
        if (username=="Test" && password=="test")
        {
            this.props.onLoginPress();
        }
        else
        {
            Alert.alert('Please enter correct Username or Password !!');
        }
        
    };
    
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 backgroundColor: '#F98765'
                                 },
                                 primaryButton: {
                                 alignItems: 'center',
                                 backgroundColor: '#2E9298',
                                 padding: 10,
                                 width:"90%",
                                 marginTop: 50
                                 },
                                 cancelButton: {
                                 alignItems: 'center',
                                 padding: 10,
                                 width:"90%",
                                 },
                                 buttonWhiteText: {
                                 fontSize: 20,
                                 color: '#FFF',
                                 },
                                 buttonBlackText: {
                                 fontSize: 20,
                                 color: '#595856'
                                 },
                                 textLabel: {
                                 textAlign: 'left',
                                 alignSelf: 'stretch',
                                 color: '#0d8898',
                                 fontSize: 20,
                                 marginLeft: 20
                                 },
                                 textInput: {
                                 height: 40,
                                 fontSize: 20,
                                 backgroundColor: '#FFF',
                                 width:"90%",
                                 borderBottomWidth:0.5
                                 }
                                 });

