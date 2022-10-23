import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ResultsList from "../components/ResultsList";

const EntertainmentDetailScreen = () => {
  const [data, setData] = useState([]);

  const getEntertainment = async () => {
    try {
      const response = await fetch("http://localhost:5001/entertainment");
      const json = await response.json();
      // console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEntertainment();
  }, []);

  return (
    <>
      <ScrollView>
        <ResultsList results={data} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default EntertainmentDetailScreen;
