// App.js

import React from 'react'
import 'react-native-gesture-handler'
import Connexion from './Components/Connexion'
import Search from './Components/Search'
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class AccueilScreen extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.second_container}>
          <Connexion/>
        </View>
        <View style={styles.second_container}>
          <View style={styles.buttons}>
            <Button
              title="Connexion"
              onPress={() => this.props.navigation.navigate('Inscription')}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="Inscription"
              onPress={() => this.props.navigation.navigate('Inscription')}
            />
          </View>
        </View>
      </View>
    );
  }
}

class InscriptionScreen extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Accueil')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Accueil: AccueilScreen,
    Inscription: InscriptionScreen,
  },
  {
    initialRouteName: 'Accueil',
  }
);


const AppContainer = createAppContainer(RootStack);
const styles = StyleSheet.create({
  main_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  second_container: {     
    flex: 1,
    marginTop:5,
    marginBottom: 5
  },
  buttons: {
    marginTop: 5
  }
})

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}