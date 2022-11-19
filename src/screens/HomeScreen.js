import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ResultsList from "../components/ResultsList";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [byRating, setByRating] = useState([]);
  const [dominicanMovies, setDominicanMovies] = useState([]);
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

  const getRecentlyAddedEntertainment = async () => {
    try {
      const response = await fetch("http://localhost:5001/entertainment/bydate");
      const json = await response.json();
      // console.log(json);
      setRecentlyAdded(json);
    } catch (error) {
      console.error(error);
    }
  }
  ;
  const getByRating = async () => {
    try {
      const response = await fetch("http://localhost:5001/entertainment/byrating");
      const json = await response.json();
      // console.log(json);
      setByRating(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getDominicanMovies = async () => {
    try {
      const response = await fetch("http://localhost:5001/entertainment/bygenre/Dominican");
      const json = await response.json();
      // console.log(json);
      setDominicanMovies(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEntertainment();
    getRecentlyAddedEntertainment();
    getByRating();
    getDominicanMovies();
  }, []);

  return (
    <>
      <ScrollView>
        <ResultsList results={byRating} title="Top" />
        <ResultsList results={data} title="BillBoard" />
        <ResultsList results={recentlyAdded} title="Recently Added" />
        <ResultsList results={dominicanMovies} title="Dominican Republic" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
