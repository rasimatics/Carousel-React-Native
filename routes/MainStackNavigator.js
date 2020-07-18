import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import IconA from 'react-native-vector-icons/Entypo'
import IconB from 'react-native-vector-icons/MaterialIcons'
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
                    headerRight: () => (
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <IconA name="share" style={styles.icon} size={30} color={'#fff'} />
                            <IconB name="settings" style={styles.icon} size={30} color={'#fff'} />
                        </View>
                    )
                }} name='CardDetails' component={CardDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    icon: {
        padding: 10,
    }
})

export default MainStackNavigator