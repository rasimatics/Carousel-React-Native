import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home'
import CardDetails from '../components/CardDetails'
import { View, StyleSheet } from 'react-native'

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
                <Stack.Screen options={{
                    headerTitle: "Namazvdom",
                    headerTitleStyle: {
                        color: "#fff"
                    },
                    headerStyle: {
                        backgroundColor: '#21254D',
                    },
                    headerTintColor: '#000',
                }} name='CardDetails' component={CardDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator