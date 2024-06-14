import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Pecas from '../Pages/Pecas';
import Sacola from '../Pages/Sacola';
import Cadastro from '../Pages/Cadastro';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado, cadastro } = useContext(AuthContext);

    if (!logado && !cadastro ) {
        return (<Login />)
    }

    if( !logado && cadastro ) {
        return ( <Cadastro /> )
    }
   
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: '#ACC5A0',
                        height: 60
                    },
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "#62735B",
                    tabBarLabelStyle: { fontSize: 12 }
                }}
            >
                <Tab.Screen
                    name="Início"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home-outline" color={color} size={35} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Só na FARM"
                    component={Pecas}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="sprout-outline" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Perfil"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="bee" color={color} size={45} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Sacola"
                    component={Sacola}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="bag-personal-outline" color={color} size={30} />
                        ),
                        tabBarBadge: 5,
                        tabBarBadgeStyle: {
                            backgroundColor: '#D9F0CE'
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}