import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{ uri: result.primaryImage.url }}
      />
      <View style={{flex: 1}}>
        <Text style={{...styles.nameStyle, flexWrap: "wrap"}}>{result.titleText.text}</Text>
      </View>
      <Text>{result.rating} Stars</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 10,
    maxWidth: 200,
  },
  imageStyle: { 
    width: 200,
    height: 170,
    resizeMode: "contain",

    /*width: 200,
    height: 350,
    borderRadius: 4,
    marginBottom: 5,
    resizeMode: "contain"*/
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
