import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";
import ListScreen from "../screens/ListScreen";
import ImageScreen from "../screens/ImageScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name == "Home") {
            return (
              <Entypo name="home" color="black" style={styles.iconStyle} />
            );
          } else if (route.name == "Search") {
            return <Feather name="search" style={styles.iconStyle} />;
          } else if (route.name == "List") {
            return <FontAwesome name="list" style={styles.iconStyle} />;
          } else if (route.name == "Profile") {
            return <Feather name="user" style={styles.iconStyle} />;
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "tomato",
        tabBarLabelPosition: "below-icon",
        headerShown: false,
      })}
      sceneContainerStyle={{ marginLeft: 10, marginTop: 50, marginRight: 5 }}
    >
      <Tab.Screen
        name="Home"
        style={styles.iconNameStyle}
        component={ImageScreen}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  iconNameStyle: {
    fontWeight: 700,
    paddingBottom: 20,
  },
});
export default Navigation;
