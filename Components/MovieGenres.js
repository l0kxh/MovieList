import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  ScrollViewBase,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MovieItem from "./MovieItem";

const MovieGenres = ({ movie,navigation}) => {
  if(movie==undefined){
    <ActivityIndicator />
  }
  else{
    return (
      <ScrollView>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Action
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Action"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Thriller
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Thriller"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Crime
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Crime"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Drama
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Drama"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Adventure
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Adventure"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Biography
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Biography"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
          Sci-Fi
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Sci-Fi"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
          History
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("History"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
          War
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("War"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
          Family
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Family"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
          Animation
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Animation"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Romance
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Romance"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate({
                    name : 'Movie',
                    params : {item},
                    merge : true,
                  })}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Mystery
          </Text>
          <ScrollView horizontal={true}>
            {movie.map((item, index) => {
              if (item.genres.includes("Mystery"))
                return (
                  <TouchableOpacity key={index} onPress={()=>{navigation.navigate('Movie',{item})}}>
                  <MovieItem
                    image={item.poster}
                    rating={item.imdb_rating}
                    key={index}
                    title={item.title}
                  />
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    );
          }
  }
export default MovieGenres;
