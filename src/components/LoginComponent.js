import { View, TextInput, StyleSheet, TouchableOpacity, } from "react-native";
import { useState } from "react";
const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <View>
            <View>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="email"
                    onChangeText={(email) => setEmail(email)}
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
            <TouchableOpacity>
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LoginComponent;