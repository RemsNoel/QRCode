// Components/Acceuil.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'

class Acceuil extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>          
            <View>
            <Button title='Scan QRCode' onPress={() => {}}/>
            </View>
            <View style={{ marginTop:10, marginBottom:10 }}>
            <Button title='Liste Coupons réductions' onPress={() =>{}}/>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  }
})
export default Acceuil