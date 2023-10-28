import React from "react";
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { DaftarScreen, LoginScreen, SplashScreen } from "../pages/auth";

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="DaftarScreen" component={DaftarScreen} />
        </Stack.Navigator>
    )
}
export default Router;