import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents'
import Details from './pages/Details'

export default function Route () {
    return (<>
        <StatusBar backgroundColor="#e02041"/>
            <NavigationContainer>

<AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Incidents" component={Incidents}/>
    <AppStack.Screen name="Details" component={Details}/>
</AppStack.Navigator>

</NavigationContainer>

    </>);
}