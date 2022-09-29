import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FormTransaction } from "@scenes";

const Stack = createStackNavigator();

const AppNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="FormTransaction" component={FormTransaction} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;