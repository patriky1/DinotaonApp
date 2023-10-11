import React from 'react';
import {Text, View, ImageBackground, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import image from '../imagens/imagemApp.jpg'
import { Button } from "react-native";







const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: "#000000",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: '#f2d194',
    marginHorizontal: 120,
    marginTop:600,
    borderRadius:20,
    
  },
});

function Home() {
  
  return (
    <>
    
    <View style={styles.container}>
    <ImageBackground source={image}  style={styles.image}>
    <Pressable style={styles.button} >
      <Text style={styles.text}>Saiba mais</Text>
    </Pressable>
    </ImageBackground>
    
      
    </View>
    </>
  )
}

export default Home;

