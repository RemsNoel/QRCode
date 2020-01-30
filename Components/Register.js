// Components/Connexion.js

import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

class Register extends React.Component {
    render() {
      return (
        <View style={styles.main_container}>
            <Text style={styles.title}>Veuillez saisir vos informations :</Text>
            <View style={styles.form}>
                <Text style={styles.text}>Email :</Text>
                <TextInput style={styles.textinput} placeholder='Email'/>
                <Text style={styles.text}>Identifiant :</Text>
                <TextInput style={styles.textinput} placeholder='Identifiant'/>
                <Text style={styles.text}>Mot de passe :</Text>
                <TextInput style={styles.textinput} placeholder='Mot de passe'/>
            </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        marginTop:5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        width: 200,
    },
    marge :{
        flex:1
    },
    title:{
        fontSize:24,
        color: 'black',
        fontStyle:'italic'
    },
    text: {
        fontSize:20,
        color: 'black'
    },
    form:{
        marginTop: 10,
        flexDirection:'column',        
        alignItems: 'center'
    }
  })

export default Register