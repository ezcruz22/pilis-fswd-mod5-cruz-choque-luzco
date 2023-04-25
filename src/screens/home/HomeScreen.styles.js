import { StyleSheet, StatusBar } from "react-native";
import { FONT_SIZE, COLORS } from "../../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  bgImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    // top: -50,
  },
  ImageLogo: {
    resizeMode: "cover",
    position: "absolute",
    top: 100,
    left: 70,
    width: "65%",
    height: "20%",
  },
  title: {
    fontSize: FONT_SIZE.xxxl,
    fontWeight: "bold",
    color: COLORS.white,
    width: "75%",
    marginLeft: 25,
  },
});
