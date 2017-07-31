import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export class StubScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };

  _redirectToLogin = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={this._redirectToLogin} title="Press me to login!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
