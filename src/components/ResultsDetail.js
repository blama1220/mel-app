import { useState, useContext } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { SelectList } from 'react-native-dropdown-select-list'
import { UserContext } from '../context/UserContext'

const ResultsDetail = ({ result, isPortrait = false }) => {
  let width = Dimensions.get("window").width;
  const [dropDownOpen, setdropDownOpen] = useState(false);
  const selectData = [
    { key: "Watching", value: "Watching"},
    { key: "Completed", value: "Completed" },
    { key: "On Hold", value: "On Hold" },
    { key: "Dropped", value: "Dropped" },
    { key: "Plan to Watch", value: "Plan to Watch" },
  ]
  const { user } = useContext(UserContext);
  return (
    <View style={isPortrait ? styles.portraitContainer : styles.container}>
      <Image
        style={isPortrait ? styles.portraitImage : styles.imageStyle}
        source={{ uri: result.img }}
      />
      <View style={isPortrait ? styles.portraitContentStyle : {}}>
        <Text style={{ ...styles.nameStyle, maxWidth: width - 210 }} numberOfLines={1}>
          {result.title}
        </Text>
        <Text>{`${result.type}, ${result.date}`}</Text>
        <Progress.Bar
          progress={0.8}
          width={null}
          color={"rgba(56, 25, 255, 0.8)"}
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            display: isPortrait ? "flex" : "none",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "auto",
            marginBottom: 30,
            flexBasis: 100
          }}
        >
          <Text>
            {result.rating} <FontAwesome name="star"></FontAwesome>
          </Text>
          <Text
            style={{
              marginStart: "auto",
              marginRight: 30,
              display: isPortrait ? "flex" : "none",
            }}
          >
            0/1
          </Text>
          <SelectList
          setSelected={async(val) => {
            if(!user) {
              return;
            }
            try {
              const res = await fetch("http://localhost:5001/users/addstate", {
                method: "POST",
                body: JSON.stringify({ stateName: val.toLowerCase(), movieId: result._id, userEmail: user.email }),
                headers: {
                  Accept: "application/json, text/plain, /",
                  "Content-Type": "application/json",
                },
              });
              //Success message in v
              let v = await res.json();
  
              console.log(v);
            } catch (e) {
              console.error(e);
            }
          }} 
          data={selectData} 
          save="value"
          search={false}
          dropdownShown={dropDownOpen}
          dropdownStyles={{position: 'absolute',zIndex:1002, width: 135, left: 30, top: -150, }}
          dropdownItemStyles={{zIndex:1000, backgroundColor: "white"}}
          boxStyles={{display: 'none'}}
        />
        <Feather
          name="edit"
          size={24}
          style={{ display: isPortrait?"none":"flex"}}
          onPress={() => {
            setdropDownOpen(!dropDownOpen)
            //needs to open dropDown
          }}
        />
        </View>
      </View>
      <View
        style={isPortrait ? styles.iconContainerStyle : { display: "none" }}
      >
        <SelectList
          setSelected={async(val) => {
            if(!user) {
              return;
            }
            try {
              const res = await fetch("http://localhost:5001/users/addstate", {
                method: "POST",
                body: JSON.stringify({ stateName: val.toLowerCase(), movieId: result._id, userEmail: user.email }),
                headers: {
                  Accept: "application/json, text/plain, /",
                  "Content-Type": "application/json",
                },
              });
              //Success message in v
              let v = await res.json();
  
              console.log(v);
            } catch (e) {
              console.error(e);
            }
          }} 
          data={selectData} 
          save="value"
          search={false}
          dropdownShown={dropDownOpen}
          dropdownStyles={{position: 'absolute',zIndex:1002, width: 135, left: -135}}
          dropdownItemStyles={{zIndex:1000, backgroundColor: "white"}}
          boxStyles={{display: 'none'}}
        />
        <Feather
          name="edit"
          size={24}
          style={{ ...styles.iconStyle, marginTop: "auto", marginBottom: 10 }}
          onPress={() => {
            setdropDownOpen(!dropDownOpen)
            //needs to open dropDown
          }}
        />
        <Feather 
          name="plus-square"
          size={24}
          style={{ ...styles.iconStyle }} 
          onPress={() => {
            //just do a call to add it
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 10,
    alignSelf: "center",
  },
  portraitContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 10,
  },
  imageStyle: {
    width: 200,
    height: 325,
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
