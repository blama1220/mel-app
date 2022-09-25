import React, { useState } from "react";
import ResultsDetail from "../components/ResultsDetail";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ListScreen = () => {
  const status = [
    { name: "All", selected: true },
    { name: "Watching", selected: false },
    { name: "Completed", selected: false },
    { name: "On Hold", selected: false },
    { name: "Dropped", selected: false },
    { name: "Plan to Watch", selected: false },
  ];
  const movies = [
    {
      id: "tt9146610",
      primaryImage: {
        id: "rm1631024640",
        width: 640,
        height: 480,
        url: "https://m.media-amazon.com/images/M/MV5BYWU5YTg2ODgtYjY5Mi00ZDJhLTkyYjktYWRmNTc3ZjQ4YmJkXkEyXkFqcGdeQXVyODE4Njg5ODQ@._V1_.jpg",
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        episodes: 0,
        __typename: "TitleType",
      },
      titleText: {
        text: "Discount Spiderman 2",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2018,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 17,
        month: 10,
        year: 2018,
        __typename: "ReleaseDate",
      },
      rating: 1.3,
    },
    {
      id: "tt0691335",
      primaryImage: {
        id: "rm2571683584",
        width: 500,
        height: 375,
        url: "https://m.media-amazon.com/images/M/MV5BMTQ5NzA1OTQxMl5BMl5BanBnXkFtZTgwNzE4NDY2MjE@._V1_.jpg",
        __typename: "Image",
      },
      titleType: {
        text: "TV Episode",
        id: "tvEpisode",
        isSeries: false,
        isEpisode: true,
        __typename: "TitleType",
      },
      titleText: {
        text: "Rugrats"
      },
      releaseYear: {
        year: 1994,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 16,
        month: 1,
        year: 1994,
        __typename: "ReleaseDate",
      },
      rating: 2.7,
    },
    {
      id: "tt9146610b",
      primaryImage: {
        id: "rm1631024640",
        width: 640,
        height: 480,
        url: "https://m.media-amazon.com/images/M/MV5BYWU5YTg2ODgtYjY5Mi00ZDJhLTkyYjktYWRmNTc3ZjQ4YmJkXkEyXkFqcGdeQXVyODE4Njg5ODQ@._V1_.jpg",
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        episodes: 0,
        __typename: "TitleType",
      },
      titleText: {
        text: "Discount Spiderman 2",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2018,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 17,
        month: 10,
        year: 2018,
        __typename: "ReleaseDate",
      },
      rating: 1.3,
    },
    {
      id: "tt0691335a",
      primaryImage: {
        id: "rm2571683584",
        width: 500,
        height: 375,
        url: "https://m.media-amazon.com/images/M/MV5BMTQ5NzA1OTQxMl5BMl5BanBnXkFtZTgwNzE4NDY2MjE@._V1_.jpg",
        __typename: "Image",
      },
      titleType: {
        text: "TV Episode",
        id: "tvEpisode",
        isSeries: false,
        isEpisode: true,
        __typename: "TitleType",
      },
      titleText: {
        text: "Rugrats"
      },
      releaseYear: {
        year: 1994,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 16,
        month: 1,
        year: 1994,
        __typename: "ReleaseDate",
      },
      rating: 2.7,
    },
  ];
  const [currentStatus, setCurrentStatus] = useState(status[0].name);

  return (
    <>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={true}
        keyExtractor={(status) => status.name}
        data={status}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setCurrentStatus(item.name);
              }}
            >
              <Text
                style={{
                  ...styles.testStyle,
                  color: currentStatus == item.name ? "red" : "black",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    <ScrollView>
      {movies.map((item) => {
        return(
          <React.Fragment key={item.id}>
            <ResultsDetail result={item} isPortrait={true}></ResultsDetail>
          </React.Fragment>
        )
      })}
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  testStyle: {
    marginBottom: 20,
    marginLeft: 10,
  },
});

export default ListScreen;
