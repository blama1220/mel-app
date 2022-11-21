import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const RegisterComponent = () => {
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
    <View>
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Name"
          onChangeText={(name) => setUserData({ ...userData, name })}
        />
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="LastName"
          onChangeText={(lastName) => setUserData({ ...userData, lastName })}
        />
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          onChangeText={(email) => setUserData({ ...userData, email })}
        />
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Work"
          onChangeText={(work) => setUserData({ ...userData, work })}
        />
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Age"
          keyboardType="numeric"
          onChangeText={(age) => setUserData({ ...userData, age })}
        />
      </View>
      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          onChangeValue={(value) => {
            setUserData({ ...userData, gender: value });
          }}
          setItems={setItems}
        />
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
        onPress={async () => {
          try {
            const res = await fetch("http://192.168.86.105:5001/users", {
              method: "POST",
              body: JSON.stringify(userData),
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              }
            });
            let v = await res.json();
            console.log(v);
          } catch (e) {
            console.error(e);
          }
        }}
      >
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterComponent;
