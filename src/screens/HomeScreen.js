import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { UserContext } from "../context/UserContext";
import { useIsFocused } from "@react-navigation/native";
import ResultsList from "../components/ResultsList";
const ENDPOINT = "https://lit-springs-45882.herokuapp.com/";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [byRating, setByRating] = useState([]);
  const [dominicanMovies, setDominicanMovies] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const { user } = useContext(UserContext);
  const isFocused = useIsFocused();
  const getEntertainment = async () => {
    const isMounted = true;
    try {
      const response = await fetch(`${ENDPOINT}entertainment/billboard`);
      const json = await response.json();
      // console.log(json);
      if (isMounted) setData(json);
    } catch (error) {
      console.error(error);
    }
    return () => {
      isMounted = false;
    };
  };

  const getRecentlyAddedEntertainment = async () => {
    try {
      const response = await fetch(`${ENDPOINT}entertainment/bydate`);
      const json = await response.json();
      // console.log(json);
      setRecentlyAdded(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getByRating = async () => {
    try {
      const response = await fetch(`${ENDPOINT}entertainment/byrating`);
      const json = await response.json();
      // console.log(json);
      setByRating(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getDominicanMovies = async () => {
    try {
      const response = await fetch(
        `${ENDPOINT}entertainment/bygenre/Dominican`
      );
      const json = await response.json();
      // console.log(json);
      setDominicanMovies(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getRecomendedMovies = async () => {
    try {
      if (!user) {
        setRecomendations([]);
        return;
      }
      const response = await fetch(`${ENDPOINT}recomendation`, {
        method: "Post",
        body: JSON.stringify({ userId: user._id }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      let obj = {};
      for (let v of json) {
        if (v) {
          obj[v._id] = v;
        }
      }
      setRecomendations(Object.values(obj));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getEntertainment();
      getRecentlyAddedEntertainment();
      getByRating();
      getDominicanMovies();
      getRecomendedMovies();
    }
  }, [user, isFocused]);

  return (
    <>
      <ScrollView>
        <ResultsList results={byRating} title="Top" />
        <ResultsList results={data} title="BillBoard" />
        <ResultsList results={dominicanMovies} title="Dominican Republic" />
        <ResultsList results={recomendations} title="Recomendations" />
        <ResultsList results={recentlyAdded} title="Recently Added" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
