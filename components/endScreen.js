import { StyleSheet, Text, View, Button, Image } from "react-native";
import HighlightText from "../constants/highlighttext";
import Colors from '../constants/colors'

const EndScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          // source={{uri :'https://cdn.pixabay.com/photo/2020/10/15/07/00/game-over-5656173_1280.jpg'
          // }}
          source={require("../assets/game-over.jpg")}
        />
      </View>
      <Text style={styles.resulttext}>
        it took <HighlightText>{props.nor}</HighlightText> rounds to guess the
        no and number is <HighlightText>{props.userno}</HighlightText>
      </Text>
      <Button title="restart game" onPress={props.restartHandler} color={Colors.primary}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 550,
    height: 550,
  },
  imagecontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    overflow: "hidden",
    width: 300,
    height: 300,
    // borderWidth: 2,
    //borderColor: "black",
    margin: 20,
    borderRadius: 150,
  },
  resulttext: {
    fontSize: 16.5,
    margin: 10,
  },
});

export default EndScreen;
