import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderTitle } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { useContext } from "react";
import { Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";
import ListScreen from "../screens/ListScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AuthenticationScreen from "../screens/AuthenticationScreen";
//import auth from '@react-native-firebase/auth';
import { UserContext } from "../context/UserContext";
const Tab = createBottomTabNavigator();

const Navigation = () => {

  const {user} = useContext(UserContext);

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
        headerShown: true,
      })}
      sceneContainerStyle={{ paddingLeft: 5, marginTop: 50, paddingRight: 5 }}
    >
      <Tab.Screen
        name="Home"
        style={styles.iconNameStyle}
        component={HomeScreen}
        options={{
          header: ({ navigation, route, options }) => {
            return (
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.1)"
                }}
              >
                <Image
                  source={require("./../images/app-logo3.png")}
                  style={{ height: 35, width: 70 }}
                />
                <Text></Text>
                <Text></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="List" component={user?ListScreen:AuthenticationScreen} />
      <Tab.Screen name="Profile" component={user?ProfileScreen:AuthenticationScreen} />
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
