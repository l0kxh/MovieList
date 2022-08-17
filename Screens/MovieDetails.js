import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";

const MovieDetails = ({ route}) => {
  console.log(route.params?.item.title)
  const data = route.params?.item;
  const year = data.released_on.substr(0,4);
  return (
    <View style={styles.container}>
      <View style={styles.imageCon}>
        <Image source={{ uri: data.backdrop }} style={styles.backdrop} />
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <Image source={{ uri: data.poster }} style={styles.poster} />
      <View style={{ marginTop: 110, marginLeft: 25 }}>
        <Text style={styles.textStyle}>
          {year} | {data.length} | {data.director}
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>Cast</Text>
          <Text style={styles.textStyle}> : {data.cast.join()}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.textHeader}>Movie Description : </Text>
          <Text style={{ fontSize: 16, color: "white" }}>{data.overview}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#000",
  },
  imageCon: {
    borderBottomWidth: 0.5,
    borderBottomColor: "white",
  },
  backdrop: {
    width: "100%",
    height: 220,
  },
  poster: {
    width: 135,
    height: 200,
    position: "absolute",
    marginTop: 150,
    marginLeft: 25,
    borderWidth: 1,
    borderColor: "white",
  },
  title: {
    color: "white",
    position: "absolute",
    marginLeft: 180,
    fontSize: 25,
    fontWeight: "600",
    bottom: 5,
  },
  textStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  textHeader: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});

export default MovieDetails;
