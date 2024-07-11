import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/login/login';
import Register from './pages/login/register';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Exchange from './pages/exchange/exchange';
import Stations from './pages/stations/stations';
import Units from './pages/stations/units';
import Sockets from './pages/stations/sockets';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
                <Stack.Screen options={{headerShown: false}} name="HomeTabs" component={HomeTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Stations') {
                        iconName = 'ev-station';
                    } else if (route.name === 'Exchange') {
                        iconName = 'currency-exchange';
                    }

                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
                tabBarStyle: {
                    backgroundColor: '#222222',
                    paddingTop: 10,
                    height: 75,
                },
                tabBarActiveBackgroundColor: '#222222',
                tabBarInactiveBackgroundColor: '#222222',
                tabBarActiveTintColor: '#A00',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
            <Tab.Screen options={{headerShown: false}} name="Exchange" component={Exchange} />
            <Tab.Screen options={{headerShown: false}} name="Stations" component={StationStack} />
            <Tab.Screen options={{headerShown: false}} name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

function StationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Station" component={Stations} />
            <Stack.Screen options={{headerShown: false}} name="Units" component={Units} />
            <Stack.Screen options={{headerShown: false}} name="Sockets" component={Sockets} />
        </Stack.Navigator>
    );
}

export default App;
