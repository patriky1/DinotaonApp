import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, Pressable, Image, Animated } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import Logo from "../imagens/Logo.png"
import bg1 from "../imagens/bg1.jpg";
import bg2 from "../imagens/bg2.jpg";
import bg3 from "../imagens/bg3.jpg";
import bg4 from "../imagens/bg4.jpg";
import bg5 from "../imagens/bg5.jpg";

const backgroundImages = [bg1, bg2, bg3, bg4, bg5];

const Home = () => {
  const navigation = useNavigation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const transitionBackground = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      transitionBackground();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImages[currentImageIndex]} style={styles.image}>
        <View style={styles.logo}>
          <Image source={Logo} />
        </View>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Cidade")}>
          <Text style={styles.text}>Saiba mais</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginLeft: 15,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    margin: 10,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#000000",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2d194",
    marginHorizontal: 120,
    borderRadius: 20,
    marginTop: 350,
  },
});

export default Home;
