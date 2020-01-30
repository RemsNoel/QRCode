// Components/Connexion.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'

class Connexion extends React.Component {
    render() {
      return (
        <View style={styles.main_container}>
            <View style={styles.marge}></View>
            <View style={styles.second_container}>          
                <Text style={styles.text}>Identifiant :</Text>
                <TextInput style={styles.textinput} placeholder='Identifiant'/>
                <Text style={styles.text}>Mot de passe :</Text>
                <TextInput style={styles.textinput} placeholder='Mot de passe'/>
            </View>
            <View style={styles.marge}></View>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      flexDirection:'row',
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
    second_container :{     
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttons :{
        flexDirection: 'column',
        marginTop:5
    },
    buttonConn :{        
        marginTop:5,
    },
    buttonRegister :{        
        marginTop:5,
        backgroundColor: 'red'
    },
    text :{
        fontSize:20,
        color : 'black'
    },
    marge :{
        flex:1
    }
  })

export default Connexion