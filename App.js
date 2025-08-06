import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNav from "./app/navigation/AuthNav";


export default function App() {
  return (
    <NavigationContainer>
      <AuthNav/>
    </NavigationContainer>
  );
}
