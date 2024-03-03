import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home/Home";
import City from "./pages/City/City";
import Notification from "./pages/Notification/Notification";
import Culture from "./pages/Culture/Culture";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { Image, View, Text } from "react-native";
import img from "./pages/imagens/Logo.png";
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 10,
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Cidade"
        component={City}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={img}
                style={{ width: 40, height: 40, marginLeft: 5 }}
              />
              <Text style={{ fontSize: 20, marginLeft: 5 }}>Cidade</Text>
            </View>
          ),
          tabBarLabel: "Cidade",
          tabBarIcon: ({ color, size }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5 name="city" size={size} color={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Pontos Turisticos"
        component={Culture}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="heart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Notificacoes"
        component={Notification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="notification" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
