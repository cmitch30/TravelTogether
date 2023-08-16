import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import HeroComponent from "../components/HeroComponent"; // Import the HeroComponent

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6E553A", // Dark earthly tone header text
  },
  button: {
    backgroundColor: "#6E553A", // Dark earthly tone button
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 200,
  },
  buttonText: {
    color: "#F0EAD6", // Soft earthly tone text
    fontSize: 18,
    fontWeight: "bold",
  },
});

const images = [
  require("../assets/Madeira_Portugal.jpg"),
  require("../assets/glacier-bay-np.jpg"),
  require("../assets/florian-wehde-milUxSbp4_A-unsplash.jpg"),
  // Add more images
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function resizeImage(imageSource) {
  const resizedImage = Image.resolveAssetSource(imageSource);
  const aspectRatio = resizedImage.width / resizedImage.height;
  const resizedWidth = width;
  const resizedHeight = width / aspectRatio;

  return {
    uri: resizedImage.uri,
    width: resizedWidth,
    height: resizedHeight,
  };
}

function HomeScreen({ navigation }) {
  const [backgroundImage, setBackgroundImage] = useState(getRandomImage());

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage(getRandomImage());
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ImageBackground
      source={resizeImage(backgroundImage)}
      style={styles.container}
    >
      <HeroComponent />

      <Text style={styles.headerText}>Welcome to TravelTogether!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Trip")}
      >
        <Text style={styles.buttonText}>Create New Trip</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default HomeScreen;
