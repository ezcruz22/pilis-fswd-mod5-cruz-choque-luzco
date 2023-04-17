import { Image, ImageBackground, SafeAreaView, Text } from "react-native";
import { styles } from "./HomeScreen.styles";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/images/home-bg-jujuy1.jpg")}
      >
        <Image
          style={styles.ImageLogo}
          source={require("../../../assets/images/Jujuy-Dale-la-Vuelta-a-Jujuy_Logo.png")}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
