import React, { useEffect, useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Text } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  LocationAccuracy,
  LocationObjectCoords,
} from "expo-location";

import { View, StyleSheet, Image } from "react-native";

import image1 from "../imagens/fundo.jpeg";
import image2 from "../imagens/Cc.jpg";
import image3 from "../imagens/igreja.jpeg";
import image4 from "../imagens/entrada.jpeg";
import image5 from "../imagens/igrejaBJ.jpeg";

export default function Culture() {
  const [location, setLocation] = useState<LocationObject | any>({
    coords: { latitude: -6.759720362446049, longitude: -38.23042701779621 },
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const mapRef = useRef<MapView>(null);
  const carouselRef = useRef<Carousel<any>>(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);
  type Location = {
    latitude: number;
    longitude: number;
  };

  const handleMarkerPositionChange = (index: number) => {
    const locations: Location[] = [
      { latitude: -6.759720362446049, longitude: -38.23042701779621 },
      { latitude: -6.758192482849701, longitude: -38.22944967361301 },
      { latitude: -6.758358353317611, longitude: -38.23261834842211 },
      { latitude: -6.73218035301906, longitude: -38.26181755953773 },
      { latitude: -6.758262464748601, longitude: -38.228530661975284 },
    ];

    const newCoordinate: Location = locations[index];

    setLocation({
      ...location!,
      coords: {
        ...location!.coords,
        ...newCoordinate,
      },
    });

    mapRef.current?.animateCamera(
      {
        center: newCoordinate,
        pitch: 70,
      },
      { duration: 1000 }
    );
  };

  const renderCarouselItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} />
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      )}
      <Carousel
        ref={carouselRef}
        data={[
          { image: image1, title: "Sousa - Centro" },
          { image: image2, title: "centro Cultural" },
          { image: image3, title: "Ireja Matriz" },
          { image: image4, title: "Vale dos Dinossauros" },
          { image: image5, title: "Igreja Bom Jesus" },
        ]}
        renderItem={renderCarouselItem}
        sliderWidth={350}
        itemWidth={290}
        onSnapToItem={(index) => {
          setActiveSlide(index);
          handleMarkerPositionChange(index);
        }}
      />
      <Pagination
        dotsLength={5}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.8}
        inactiveDotScale={0.6}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: "100%",
  },
  carouselItem: {
    marginBottom: 55,
    marginTop: 20,
    width: 280,
    height: 255,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  carouselImage: {
    borderRadius: 8,
    width: 260,
    height: 220,
    resizeMode: "cover",
  },
  paginationContainer: {
    paddingVertical: 1,
    margin: 0,
    marginTop: -400,
  },
  paginationDot: {
    marginBottom: 3,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 7,
    backgroundColor: "rgba(0, 0, 0, 0.92)",
  },
  paginationInactiveDot: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});
