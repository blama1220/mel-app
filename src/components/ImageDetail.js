import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text> Image Score - {props.imageScore}</Text>
      <Image style={styles.image} source={props.imageSource}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 150,
  },
});

export default ImageDetail;
