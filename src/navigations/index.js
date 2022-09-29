import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./app-navigator";

const Stack = createStackNavigator();

const RootNavigator = ({ }) => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="App" component={AppNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;