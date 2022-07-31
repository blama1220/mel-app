import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
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

  return (
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
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  testStyle: {
    marginVertical: 20,
    marginLeft: 10,
  },
});

export default ListScreen;
