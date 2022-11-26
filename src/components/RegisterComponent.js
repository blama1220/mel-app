// import {
//   View,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
// } from "react-native";
// import { useState } from "react";
// import DropDownPicker from "react-native-dropdown-picker";

// const RegisterComponent = () => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     { label: "Male", value: "M" },
//     { label: "Female", value: "F" },
//     { label: "Rather not say", value: "" },
//   ]);
//   const [userData, setUserData] = useState({
//     email: "",
//     name: "",
//     lastName: "",
//     age: 0,
//     work: "",
//     gender: "",
//   });
//   const [password, setPassword] = useState("");
//   return (
//     <View>
//       <View>
//         <TextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           placeholder="Name"
//           onChangeText={(name) => setUserData({ ...userData, name })}
//         />
//       </View>
//       <View>
//         <TextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           placeholder="LastName"
//           onChangeText={(lastName) => setUserData({ ...userData, lastName })}
//         />
//       </View>
//       <View>
//         <TextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           placeholder="Email"
//           onChangeText={(email) => setUserData({ ...userData, email })}
//         />
//       </View>
//       <View>
//         <TextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           placeholder="Work"
//           onChangeText={(work) => setUserData({ ...userData, work })}
//         />
//       </View>
//       <View>
//         <TextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           placeholder="Age"
//           keyboardType="numeric"
//           onChangeText={(age) => setUserData({ ...userData, age })}
//         />
//       </View>
//       <View>
//         <DropDownPicker
//           open={open}
//           value={value}
//           items={items}
//           setOpen={setOpen}
//           setValue={setValue}
//           onChangeValue={(value) => {
//             setUserData({ ...userData, gender: value });
//           }}
//           setItems={setItems}
//         />
//       </View>
//       <View>
//         <TextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           placeholder="Password"
//           secureTextEntry={true}
//           onChangeText={(password) => setPassword(password)}
//         />
//       </View>
//       <TouchableOpacity
//         onPress={async () => {
//           try {
//             const res = await fetch("http://192.168.86.105:5001/users", {
//               method: "POST",
//               body: JSON.stringify(userData),
//               headers: {
//                 'Accept': 'application/json, text/plain, */*',
//                 'Content-Type': 'application/json'
//               }
//             });
//             let v = await res.json();
//             console.log(v);
//           } catch (e) {
//             console.error(e);
//           }
//         }}
//       >
//         <Text>Registrar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TextHeader,
} from "react-native";

export default function RegisterComponent({ toLogin }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
    { label: "Rather not say", value: "" },
  ]);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    lastName: "",
    age: 0,
    work: "",
    gender: "",
  });
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View>
        <Text style={styles.TextHeader}>SING UP</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setUserData({ ...userData, name })}
        ></TextInput>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Gender"
          placeholderTextColor="#003f5c"
          onChangeText={(gender) => setUserData({...userData, gender})}
        ></TextInput>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Age"
          placeholderTextColor="#003f5c"
          keyboardType="numeric"
          onChangeText={(age) => setUserData({ ...userData, age })}
        ></TextInput>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Work"
          placeholderTextColor="#003f5c"
          onChangeText={(work) => setUserData({ ...userData, work })}
        ></TextInput>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Location"
          placeholderTextColor="#003f5c"
          onChangeText={(location) => setUserData({ ...userData, location })}
        ></TextInput>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setUserData({ ...userData, email })}
        ></TextInput>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={async () => {
          try {
            const res = await fetch("http://192.168.86.105:5001/users", {
              method: "POST",
              body: JSON.stringify({ ...userData, password }),
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
              },
            });
            let v = await res.json();
            console.log(v);
          } catch (e) {
            console.error(e);
          }
        }}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toLogin}>
        <Text style={styles.singIn_button}>Already registered Sing In.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 280,
    height: 250,
  },

  inputView: {
    backgroundColor: "#D3D3D3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextHeader: {
    fontSize: 50,
    height: 70,
    padding: "auto",
    marginBottom: "auto",
  },

  TextInputStyle: {
    height: 50,
    padding: 10,
    textAlign: "left",
  },

  singIn_button: {
    color: "#053067",
    height: 30,
    marginBottom: 30,
    fontWeight: "bold",
  },

  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#99ccff",
  },
});
