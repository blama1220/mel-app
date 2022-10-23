import React, { useState, useEffect } from "react";
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

  const [currentStatus, setCurrentStatus] = useState(status[0].name);
  const [data, setData] = useState([]);

  const getEntertainment = async () => {
    try {
      const response = await fetch("http://localhost:5001/entertainment");
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEntertainment();
  }, [currentStatus]);

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
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <ScrollView>
        {data.map((item) => {
          return (
            <React.Fragment key={item._id}>
              <ResultsDetail result={item} isPortrait={true}></ResultsDetail>
            </React.Fragment>
          );
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
