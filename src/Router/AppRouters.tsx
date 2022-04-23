import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
// SCREENS
import ProducerRouters from './ProducerRouters';
import BestProducersRouters from './BestProducersRouters';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

function AppRouters() {

    const HomeIcon = (color: string) => {
        return <Icon name="home-outline" size={26} color={color} />
    }

    const BestProducerIcon = (color: string) => {
        return <Icon name="heart-outline" size={26} color={color} />
    }

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#2A9F85',
                tabBarInactiveTintColor: '#C7C7C7',
                tabBarIcon: ({ color: tintColor }) => {
                    let Icon: any;
                    switch (route.name) {
                        case 'Home':
                            Icon = HomeIcon(tintColor)
                            break;
                        case 'Top Producers':
                            Icon = BestProducerIcon(tintColor);
                            break;
                    }
                    return Icon;
                },
                tabBarShowLabel: false
            })}>
                <Tab.Screen
                    name='Home'
                    component={ProducerRouters}
                />
                <Tab.Screen
                    name='Top Producers'
                    component={BestProducersRouters}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppRouters