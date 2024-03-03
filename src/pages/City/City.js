import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import Carousel from "react-native-snap-carousel";
import { StyleSheet } from "react-native";
import { LogBox } from "react-native";
import {Dimensions} from 'react-native';


import imagem1 from "../imagens/bg1.jpg";
import imagem2 from "../imagens/imgfundo.jpeg";

export default function City() {
  const carouselItems = [
    {
      title: "Sousa-PB",
      image: imagem1,
    },
    {
      title: "Outro título",
      image: imagem2,
    },
  ];

  function renderItem({ item }) {
    return (
      <View style={styles.carouselItemContainer}>
        <Image style={styles.carouselItemImage} source={item.image} />
        <Text style={styles.carouselItemTitle}>{item.title}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textCity}>
          <Text style={styles.boldText}>Sousa</Text>, carinhosamente conhecida
          como a "Cidade Sorriso", é um verdadeiro tesouro no coração do estado
          da Paraíba, no nordeste do Brasil. Localizada no Sertão paraibano,
          Sousa combina a beleza natural do semiárido com uma atmosfera vibrante
          e acolhedora. A cidade também é famosa por abrigar um valioso tesouro
          pré-histórico: o Vale dos Dinossauros. Com sua rica herança
          paleontológica, o município é um destino imperdível para os amantes da
          história da Terra. Bem-vindo a Sousa, onde o sorriso de sua gente e os
          segredos dos dinossauros se encontram em um cenário verdadeiramente
          especial.
        </Text>
        <Carousel
        style={styles.sliderCarousel}
          data={carouselItems}
          sliderWidth={400}
          itemWidth={300}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
}
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2D194",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: (windowHeight - 10),
  },
  textCity: {
    textAlign: "justify",
    marginTop: 25,
    fontSize: 20,
    paddingHorizontal: 20
  },
  boldText: {
    fontWeight: "bold",
  },
  carouselItemContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#9A9A9A",
    borderRadius: 10,
    // width: 300,
    padding: 20,
    marginTop: 5,
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
    position: "relative",
  },
  carouselItemTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  carouselItemImage: {
    width: 250,
    height: 200,
    borderRadius: 10,
  },
  sliderCarousel: {
    width:"100%",
    height: "100%",
    paddingHorizontal: '10 20',
  }
});
