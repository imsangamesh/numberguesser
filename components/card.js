import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.screen, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  screen: {
    elevation: 5,
    alignItems: "center",
    width: "80%",
    padding: 10,
    borderRadius: 1,
  },
});

export default Card;
