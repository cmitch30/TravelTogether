import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  container: {
    height: 300, // Adjust the height according to your design
  },
  slideImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

const images = [
  require("../assets/Madeira_Portugal.jpg"),
  require("../assets/glacier-bay-np.jpg"),
  require('../assets/florian-wehde-milUxSbp4_A-unsplash.jpg'),
  // Add more images
];

function HeroComponent() {
  return (
    <View style={styles.container}>
      <Swiper showsButtons={false} autoplay>
        {images.map((image, index) => (
          <View key={index}>
            <Image source={image} style={styles.slideImage} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

export default HeroComponent;
