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

  const movies = [];

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
