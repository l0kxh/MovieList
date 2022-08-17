import {
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [item,setItem] = useState();
  const getMovie = () => {
    const Url = `https://wookie.codesubmit.io/movies?q=<${name}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer Wookie2019`,
      },
    };

    return fetch(Url, apiOptions)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.movies);
        {
          navigation.navigate({
          name : 'Result',
          params : {item},
          merge : true,
        })
        }
        })
      .catch((err) => console.log(err));
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputCont}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter movie.."
          placeholderTextColor={"grey"}
          onChangeText={(value)=>setName(value)}
        />
        <TouchableOpacity onPress={getMovie}>
        <Ionicons name="search" size={25}  />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
    padding: 15,
  },
  inputStyle: {
    width: "90%",
    height: 20,
  },
  inputCont: {
    marginTop: 100,
    flexDirection: "row",
    width: "100%",
    borderRadius: 35,
    height: 60,
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
});

export default SearchScreen;
