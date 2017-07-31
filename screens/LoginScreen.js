import React, { Component } from 'react';
import { Image, View, StatusBar, StyleSheet, Alert,Button,} from 'react-native';
import { Facebook, Google } from 'expo';
import { HomeNavigation } from './HomeNavigation/HomeNavigation';

export class LoginScreen extends Component {
  static navigationOptions = { header: null };

  _redirectToLogin = () => {
    const { navigate } = this.props.navigation;
    navigate('Home');
  }

  _handleGoogleLogin = async () => {
    this._redirectToLogin();
    // try {
    //   const { type, user } = await Google.logInAsync({
    //     androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
    //     iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
    //     androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
    //     iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
    //     scopes: ['profile', 'email']
    //   });

    //   switch (type) {
    //     case 'success': {
    //       Alert.alert(
    //         'Logged in!',
    //         `Hi ${user.name}!`,
    //       );
    //       break;
    //     }
    //     case 'cancel': {
    //       Alert.alert(
    //         'Cancelled!',
    //         'Login was cancelled!',
    //       );
    //       break;
    //     }
    //     default: {
    //       Alert.alert(
    //         'Oops!',
    //         'Login failed!',
    //       );
    //     }
    //   }
    // } catch (e) {
    //   Alert.alert(
    //     'Oops!',
    //     'Login failed!',
    //   );
    // }
  };
  
  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1201211719949057', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <Image 
            style={{width: 260, height: 220}}
            source={{ uri: 'https://image.ibb.co/dOpzqQ/visitourimg.png' }}
        />
      </View>
      <View style={styles.boxButtons}>
        <View style={styles.spacer}></View>
         <Button
            style={styles.button}
            title="Login with Facebook"
            onPress={this._handleFacebookLogin}
           />
        <View style={styles.spacer}></View>
          <Button
            style={styles.button}
            title="Login with Google"
            onPress={this._handleGoogleLogin}
          />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  
  boxImage: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  
  boxButtons: {
    flex: 1,
    height: 100,
  },

  spacer: {
    height: 20
  }
});
