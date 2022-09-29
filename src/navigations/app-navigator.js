import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailTransaction, FormTransaction } from "@scenes";

const Stack = createStackNavigator();

const AppNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="FormTransaction" component={FormTransaction} options={{ headerShown: false }}/>
            <Stack.Screen name="DetailTransaction" component={DetailTransaction} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;