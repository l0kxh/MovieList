import {
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import MovieGenres from "../Components/MovieGenres";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetails from "./MovieDetails";

const Stack = createStackNavigator();
const HomeScreen = ({navigation}) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = () => {
    const Url = `https://wookie.codesubmit.io/movies`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer Wookie2019`,
      },
    };

    return fetch(Url, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json.movies);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovies();
  }, [setMovie]);
  if(!!loading ){
    <ActivityIndicator />
  }
  else{
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <MovieGenres movie={movie} navigation={navigation} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
  },
});

export default HomeScreen;
