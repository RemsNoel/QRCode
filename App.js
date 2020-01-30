// App.js

import React from 'react'
import 'react-native-gesture-handler'
import { Button, View, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Connexion from './Components/Connexion'
import Register from './Components/Register'

class AccueilScreen extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.center_container}>
          <Connexion/>
        </View>
        <View style={styles.center_container}>
          <View style={styles.buttons}>
            <Button
              title="Connexion"
              onPress={() => this.props.navigation.navigate('App')}
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
          <View style={styles.inscription_container}>
            <Register/>
          </View>
          <View style={styles.center_container}>
          <View style={styles.buttons_inscription}>
              <Button
                title="Validation Inscription"
                onPress={() => this.props.navigation.navigate('Accueil')}
              />
            </View>
            <View style={styles.buttons_inscription}>
              <Button
                title="Retour page d'Accueil"
                onPress={() => this.props.navigation.navigate('Accueil')}
              />
            </View>
        </View>
      </View>
    );
  }
}

class AppScreen extends React.Component{
  render(){
    return (
      <View style={styles.main_container}>
        <Text>AppScreen</Text>
        <Button
          title="Retour page d'Accueil"
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
    App: AppScreen,
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
  center_container: {     
    flex: 1,
    marginTop:5,
    marginBottom: 5
  },
  inscription_container:{
    flex: 2,
    marginTop:5,
    marginBottom: 5
  },
  buttons: {
    marginTop: 5
  },
  buttons_inscription: {
    flex: 1,
    marginTop: 5
  }
})

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}