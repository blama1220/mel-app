import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/components/navigation";
import { UserProvider } from './src/context/UserContext'

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
