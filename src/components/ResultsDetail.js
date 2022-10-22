import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

const ResultsDetail = ({ result, isPortrait = false }) => {
  console.log(result);
  return (
    <View style={isPortrait ? styles.portraitContainer : styles.container}>
      <Image
        style={isPortrait ? styles.portraitImage : styles.imageStyle}
        source={{ uri: result.img }}
      />
      <View style={isPortrait ? styles.portraitContentStyle : {}}>
        <Text style={{ ...styles.nameStyle, flexWrap: "wrap" }}>
          {result.title}
        </Text>
        <Text>
          {`${result.type}, ${result.date}`}
          </Text>
        <Progress.Bar
          progress={0.8}
          width={null}
          color={"rgba(56, 25, 255, 0.8)"}
          style={{ marginTop: "auto", marginBottom: "auto", display:isPortrait?"flex":"none" }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "auto",
            marginBottom: 30,
          }}
        >
          <Text>
            {result.rating} <FontAwesome name="star"></FontAwesome>
          </Text>
          <Text style={{ marginStart: "auto", marginRight: 30, display:isPortrait?"flex":"none" }}>0/1</Text>
        </View>
      </View>
      <View
        style={isPortrait ? styles.iconContainerStyle : { display: "none" }}
      >
        <Feather
          name="edit"
          size={24}
          style={{ ...styles.iconStyle, marginTop: "auto", marginBottom: 10 }}
        />
        <Feather name="plus-square" size={24} style={{ ...styles.iconStyle }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 10,
  },
  portraitContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 10,
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
  portraitImage: {
    width: "40%",
    height: 170,
    marginRight: 10,
    resizeMode: "contain",
  },
  nameStyle: {
    fontWeight: "bold",
  },
  portraitContentStyle: {
    marginTop: 25,
    flexGrow: 1,
  },
  iconContainerStyle: {
    display: "flex",
    marginTop: 25,
    marginBottom: 25,
    flexShrink: 1,
  },
});

export default ResultsDetail;
