import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import { View, TouchableOpacity, Text } from "react-native";

const LOGIN_SCREEN = 0;
const REGISTER_SCREEN = 1;
const AuthenticationScreen = () => {
  const [screen, setScreen] = useState(LOGIN_SCREEN);
  return (
    <View>
      {screen === LOGIN_SCREEN && <LoginComponent />}
      {screen === REGISTER_SCREEN && <RegisterComponent />}

      <View>
        {screen === LOGIN_SCREEN && (
          <TouchableOpacity
            onPress={() => {
              setScreen(REGISTER_SCREEN);
            }}
          >
            {/* <Text>Registrate</Text> */}
          </TouchableOpacity>
        )}
        {screen === REGISTER_SCREEN && (
          <TouchableOpacity
            onPress={() => {
              setScreen(LOGIN_SCREEN);
            }}
          >
            <Text>Tienes cuenta? Inicia Sesión</Text>
            
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AuthenticationScreen;
