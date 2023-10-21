import React from "react";

import { Text, View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { StyleSheet } from "react-native";
import { LogBox } from "react-native";



export default function City() {
  const carouselItems = [
    {
      title: "image1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRnPf3bz8wrqAixgkHuBVjtrogsKFpIdy_bq30GCp&s",
    },
    {
      title: "image2",
      image:
        "https://s2-techtudo.glbimg.com/CDCDKUhS0FMmWH6daMavnixT6cg=/0x0:1024x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
    },
  ];
  function renderItem({ item }) {
    return (
      <View style={styles.carouselItemContainer}>
      <View style={styles.carouselItemContent}>
        <Image
          style={styles.carouselItemImage}
          source={{ uri: `${item.image}` }}
        />
        <Text style={styles.carouselItemTitle}>{item.title}</Text>
      </View>
    </View>
    );
  }
  return (
    <View style={styles.container}>
      <Carousel
        data={carouselItems}
        sliderWidth={400}
        itemWidth={300}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  carouselItemContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#9A9A9A",
    borderRadius: 10,
    width: 300,
    padding: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "relative", // Added position relative
  },
  carouselItemTitle: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    position: "absolute", // Added position absolute
    top: 220, // Adjust the top value as needed
    zIndex: 1, // Added zIndex to ensure the title appears on top
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  carouselItemImage: {
    width: 290,
    height: 300,
    borderRadius: 10,
  },
});
