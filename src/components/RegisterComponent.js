import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
const RegisterComponent = () => {
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        lastName: '',
        age: 0
    });
    const [password, setPassword] = useState("");
    return(
        <View>
            <View>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="email"
                    onChangeText={(email) => setUserData(...userData, email)}
                />
            </View>
            <View>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Nombre"
                    onChangeText={(name) => setUserData(...userData, name)}
                />
            </View>
            <View>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Apellido"
                    onChangeText={(lastName) => setUserData(...userData, lastName)}
                />
            </View>
            <View>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Edad"
                    keyboardType='numeric'
                    onChangeText={(age) => setUserData(...userData, age)}
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
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterComponent;