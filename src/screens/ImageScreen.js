import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ResultsList from "../components/ResultsList";

const ImageScreen = () => {
  // const [term, setTerm] = useState("");
  //const [searchApi, results, errorMessage] = useResult();
  /*const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };*/

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
  ];

  return (
    <>
      {/*<SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => {}} />*/}
      {/*errorMessage ? <Text>{errorMessage}</Text> : null*/}
      <ScrollView>
        <ResultsList results={movies} title="Results" />
        <ResultsList results={movies} title="BillBoard" />
        <ResultsList results={movies} title="New" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
