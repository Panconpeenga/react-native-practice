import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPress() {
    Alert.alert('You "longpressed" this button!')
  }

  render() {
    let pic = {
      uri: 'https://cdn.pixabay.com/photo/2018/08/04/07/38/printing-3583294_1280.jpg'
    };

    return (
      <View style={styles.container}>
        <Text>Welcome to the Testing Grounds!</Text>
        <Image source={pic} style={{width: 200, height: 110}}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this._onPressButton}
            onLongPress={this._onLongPress}
            underlayColor='blue'
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Button with long press</Text>
              </View>
            </TouchableOpacity>
        </View>
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
  button: {
    marginBottom: 30,
    marginTop: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
