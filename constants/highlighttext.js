import { StyleSheet, Text, View } from "react-native";
import Colors from './colors'

const HighlightText = (props) => {
  return (
  <Text style={styles.text}>{props.children}</Text>
);};

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:Colors.thirdpurple
    }
});

export default HighlightText;
