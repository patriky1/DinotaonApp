import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home/Home";
import City from "./pages/City/City";
import Notification from "./pages/Notification/Notification";
import Culture from "./pages/Culture/Culture";
import { Entypo} from '@expo/vector-icons'
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                backgroundColor:"white",
                
                
            },
        }}>
            
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
                <Entypo name="home" size={size} color={color}/>
            )
        }}
        
        />

        <Tab.Screen 
        name="Cidade" 
        component={City}
        options={{
            tabBarIcon: ({ size, color }) => (
                <FontAwesome5 name="city" size={size} color={color}/>
            )
        }}
         
         />

        <Tab.Screen 
        name="Pontos Turisticos"
        component={Culture}
        options={{
            tabBarIcon: ({ size, color }) => (
                <AntDesign name="heart" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Notificacoes"
        component={Notification}
        options={{
            tabBarIcon: ({ size, color }) => (
                <Entypo name="notification" size={size} color={color}/>
            )
        }}
         
        />

      </Tab.Navigator>
    )
}