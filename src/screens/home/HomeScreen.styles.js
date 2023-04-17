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
    top: -50,
    backgroundColor: "rgba(0,0,0,.6)",
  },
  //   ImageLogo: {
  //     resizeMode: "cover",
  //     width: "80%",
  //     height: "100%",
  //     justifyContent: "center",
  //     top: -50,
  //   },
  ImageLogo: {
    resizeMode: "cover",
    position: "absolute",
    top: 70,
    left: 50,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: FONT_SIZE.xxxl,
    fontWeight: "bold",
    color: COLORS.white,
    width: "75%",
    marginLeft: 25,
  },
});
