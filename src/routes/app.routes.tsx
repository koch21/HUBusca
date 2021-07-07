import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Pages/Home";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator headerMode="screen" >
      <AppStack.Screen name="HUBusca" component={Home} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
