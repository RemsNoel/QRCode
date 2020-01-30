// Components/ListeQrcode.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import qrcode from '../Helpers/qrcodeData'
import QRCodeItem from '../Components/qrcodeItem'

class ListeQrcode extends React.Component {
    render() {
      return (
        <View style={styles.main_container}>
            <FlatList
              data={qrcode}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <QRCodeItem qrcode={item}/>}
            />
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

export default ListeQrcode