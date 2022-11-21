import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";

const LOGIN_SCREEN = 0;
const REGISTER_SCREEN = 1;
const AuthenticationScreen = () => {
  const [screen, setScreen] = useState(LOGIN_SCREEN);
  return (
    <ScrollView>
      {screen === LOGIN_SCREEN && <LoginComponent toRegister={() => {setScreen(REGISTER_SCREEN)}} />}
      {screen === REGISTER_SCREEN && <RegisterComponent />}

      <View>
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
    </ScrollView>
  );
};

export default AuthenticationScreen;
