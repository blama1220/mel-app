import React, { useState, useEffect, useContext } from "react";
import ResultsDetail from "../components/ResultsDetail";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { UserContext } from "../context/UserContext";

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
  const { user } = useContext(UserContext);

  const getEntertainment = async (startIndex = 0) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      let response;
      if(currentStatus === "All") {
        response = await fetch(
          `http://localhost:5001/getData/${user._id}`
        ); 
      } else {
        response = await fetch(`http://localhost:5001/getData/${currentStatus.toLowerCase()}`, 
        {
          method:"Post", 
          body: JSON.stringify({ userId: user._id }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },});
      }
      const json = await response.json();
      console.log(json);
      if(json.movieStates)
        setData(json.movieStates.map((movie) => movie.movie));
      if(json.states) {
        setData(json.states.map((movie) => movie.movie));
      }
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
    <View>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={true}
        keyExtractor={(status) => status.name}
        data={status}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.name}
              onPress={() => {
                setData([]);
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
        contentContainerStyle={{flexGrow: 1}}
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
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 20,
    marginLeft: 10,
  },
});

export default ListScreen;
