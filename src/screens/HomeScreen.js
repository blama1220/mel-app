import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { UserContext } from "../context/UserContext";

import ResultsList from "../components/ResultsList";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [byRating, setByRating] = useState([]);
  const [dominicanMovies, setDominicanMovies] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const { user } = useContext(UserContext);
  const getEntertainment = async () => {
    const isMounted = true;
    try {
      const response = await fetch("http://localhost:5001/entertainment/billboard");
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
      const response = await fetch(
        "http://localhost:5001/entertainment/bydate"
      );
      const json = await response.json();
      // console.log(json);
      setRecentlyAdded(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getByRating = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/entertainment/byrating"
      );
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
        "http://localhost:5001/entertainment/bygenre/Dominican"
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
        return;
      }
      const response = await fetch(
        `http://localhost:5001/recomendation`,
        {
          method:"Post", 
          body: JSON.stringify({ userId: user._id }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      let obj = {};
      for(let v of json) {
        obj[v._id] = v;
      }
      setRecomendations(Object.values(obj));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEntertainment();
    getRecentlyAddedEntertainment();
    getByRating();
    getDominicanMovies();
    getRecomendedMovies();
  }, [user]);

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
