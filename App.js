import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';
import { LightTheme } from './app/config/Theme';
import { ThemeProvider } from './app/config/ThemeContext';
import AuthNav from "./app/navigation/AuthNav";


export default function App() {
  return (
    <ThemeProvider>
      <PaperProvider theme={LightTheme}>
        <NavigationContainer>
          <AuthNav/>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}
