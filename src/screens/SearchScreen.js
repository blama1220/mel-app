import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  //const [searchApi, results, errorMessage] = useResult();
  /*const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };*/

  const searchEntertainment = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/entertainment/search?title=${title}`
      );
      const json = await response.json();
      // console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchEntertainment();
  }, []);

  return (
    <>
      <SearchBar
        title={title}
        onTitleChange={setTitle}
        onTitleSubmit={searchEntertainment}
      />
      {/*errorMessage ? <Text>{errorMessage}</Text> : null*/}
      <View style={{ marginBottom: 85 }}>
        <ResultsList results={data} isHorizontal={false} title="Results" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
