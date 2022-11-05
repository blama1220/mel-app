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
  const [loading, setLoading] = useState(false);

  const getEntertainment = async (startIndex = 0) => {
    if(loading) {
      return ;
    }
    setLoading(true)
    try {
      const response = await fetch(`http://localhost:5001/entertainment/?startIndex=${startIndex}`);
      const json = await response.json();
      // console.log(json);
      setData([...data, ...json]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
                  ...styles.textStyle,
                  color: currentStatus == item.name ? "red" : "black",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <FlatList
      showsVerticalScrollIndicator={true}
      keyExtractor={(data) => data._id}
      data={data}
      onEndReached={() => {
        getEntertainment(data.length);
      }}
      renderItem={({ item }) => {
        return (
          <React.Fragment key={item._id}>
            <ResultsDetail result={item} isPortrait={true}></ResultsDetail>
            <View style={{ marginBottom: 10 }} />
          </React.Fragment>
        );
      }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 20,
    marginLeft: 10,
  },
});

export default ListScreen;
