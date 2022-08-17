import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text style={styles.title}>Wookie Movie</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    title  : {
        color : "white",
        textAlign : "center",
        fontSize : 30,
        fontWeight : "600",
    }
})

export default Header