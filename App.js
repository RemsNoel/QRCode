// App.js

import React from 'react'
import 'react-native-gesture-handler'
import { Button, View, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Connexion from './Components/Connexion'
import Register from './Components/Register'
import ListeQrcode from './Components/ListeQrcode'

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
              onPress={() => this.props.navigation.navigate('GoStyle')}
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

class GoStyleScreen extends React.Component{
  render(){
    return (
      <View style={styles.main_container}>
        <View style={styles.buttons_app}>
          <Button
            color="#cfccd1"
            title="Scanner QRCode"
            onPress={() => this.props.navigation.navigate('Scanning')}
          />
        </View>
        <View style={styles.buttons_app}>
          <Button
            color="#cfccd1"
            title="Mes Promotions"
            onPress={() => this.props.navigation.navigate('Promotions')}
          />
        </View>
      </View>
    );
  }
}

class ScanningScreen extends React.Component{
  render(){
    return (
      <View style={styles.main_container}>
        <Text>Scan en Cours</Text>
      </View>
    );
  }
}

class PromotionsScreen extends React.Component{
  render(){
    return (
      <View style={styles.main_container}>
          <ListeQrcode/>    
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Accueil: AccueilScreen,
    Inscription: InscriptionScreen,
    GoStyle: GoStyleScreen,
    Scanning: ScanningScreen,
    Promotions: PromotionsScreen,
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
  },
  buttons_app: {
    justifyContent:'center',
    height:'30%',
    width:'80%'
  }
})

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}