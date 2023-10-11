import React from 'react';

import {  Text, View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])

export default function City() {
  const carouselItems = [
    {
      title:'image1',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRnPf3bz8wrqAixgkHuBVjtrogsKFpIdy_bq30GCp&s",
    },
    {
      title:'image2',
      image: "https://s2-techtudo.glbimg.com/CDCDKUhS0FMmWH6daMavnixT6cg=/0x0:1024x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
    },
  ];
  function renderItem({item}){
    return(
      <View style={styles.carouselItemContainer}>
        <Text style={styles.carouselItemTitle}>{item.title}</Text>
        <Image style={styles.carouselItemImage} source={{uri: `${item.image}`}}/>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Carousel
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItemContainer:{
    backgroundColor:'#333',
    borderRadius:4,
    height:400,
    padding:20,
    marginTop:20,


  },
  carouselItemTitle:{
    fontSize:32,
    fontWeight:'bold',
    color:'#999',
    justifyContent:"center",
    display:"flex",
    
  },
  carouselItemImage:{
    width:260,
    height:300,
    borderRadius:4,
  }

});