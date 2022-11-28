import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { UserContext } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const { user, updateUser } = useContext(UserContext);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
              }}
            />

            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.userInfo}>{user.email}</Text>
            <Text style={styles.userInfo}>{user.location}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/color/70/000000/cottage.png",
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Home</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/color/70/000000/administrator-male.png",
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Settings</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/color/70/000000/filled-like.png",
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>News</Text>
            </View>
            <TouchableOpacity style={styles.infoContent} onPress={async() => {
              await AsyncStorage.clear();
              updateUser(null)
            }}>
              <Text style={styles.info}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    // backgroundColor: "#778899",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "black",
  },
});

export default ProfileScreen;
