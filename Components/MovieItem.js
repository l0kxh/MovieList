import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const MovieItem = ({title ,image}) => {
  return (
    <View style={styles.container}>
        <Image source={{uri : image}} style={styles.logo} />
        <Text style={styles.textStyle}>{title}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container : {
        borderColor : "black",
        borderWidth : 1,
        marginTop : 15,
        marginBottom : 15,
        width : 190,
        alignItems : "center",
    },
    moviecontainer : {
        padding : 5
    },
    logo : {
        width : 170,
        height: 220,
    },
    textStyle : {
        color : "white",
        fontSize : 16,
        fontWeight : "600",
        textAlign : "center"
    }
})

export default MovieItem