import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({
  title,
  results,
  isHorizontal = true,
  showTitle = true,
}) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {showTitle && <Text style={styles.titleStyle}>{title}</Text>}
      <FlatList
        horizontal={isHorizontal}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            /*onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }*/
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
