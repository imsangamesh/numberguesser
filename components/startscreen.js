import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert , Keyboard } from "react-native";
import Card from "./card";
import Colors from "../constants/colors";


const Startscreen = (props) => {
  const [enteredvalue, setenteredvalue] = useState("");
  const [finalvalue, setfinalvalue] = useState();
  const inputHandler = () => {
    if (isNaN(finalvalue) || finalvalue == null || finalvalue == "")
      alertHandler();
    else {
      Keyboard.dismiss();
      props.setcurrGuess(finalvalue);
      props.setscreen("gs");
    }
  };
  const numberinputhandler = (inputtext) => {
    setenteredvalue(inputtext.replace(/[^0-9]/g, ""));
  };
  const resetHandler = () => {
    Keyboard.dismiss();
    setenteredvalue("");
    setfinalvalue("");
  };
  const alertHandler = () => {
    Alert.alert(
      "Oops !",
      "please make sure that you have to entered a number ",
      [{ text: "i understand", style: "destructive" }]
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>let's start the game</Text>
      <Card style={styles.card}>
        <Text style={styles.guesstitle}>enter your Number</Text>
        <TextInput
          style={styles.textinput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numberinputhandler}
          value={enteredvalue}
        />
        <View style={styles.buttonview}>
          <View style={styles.button}>
            <Button color={Colors.secondary} title="cancel" onPress={resetHandler} />
          </View>
          <View style={styles.button}>
            <Button
              color={Colors.secondary}
              title="confirm"
              onPress={() => {setfinalvalue(enteredvalue) ; Keyboard.dismiss()}}
            />
          </View>
        </View>
      </Card>
      <Card style={styles.numbercard}>
        <Text style={styles.numbercardtext}>your selected no is </Text>
        <Text style={styles.inputno}>{finalvalue}</Text>
        <View style={styles.numbercardbtn}>
          <Button onPress={inputHandler} color={Colors.primary} title="START" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  card: {
    borderRadius: 15,
    padding: 7,
  },
  button: {
    width: 100,
  },
  buttonview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 20,
  },
  textinput: {
    backgroundColor: "#f0f0f0",
    margin: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 2.5,
    width: 60,
    textAlign: "center",
    fontSize: 18,
    padding: 4,
    paddingHorizontal: 7,
  },
  title: {
    fontSize: 20,
    marginVertical: 40,
    fontWeight: "bold",
  },
  guesstitle: {
    fontSize: 16,
    color: "#ff3b72",
    fontStyle: "italic",
    paddingTop: 20,
    fontWeight: "700",
  },
  numbercard: {
    marginTop: 30,
    borderRadius: 15,
    width: "60%",
  },
  numbercardtext: {
    fontSize: 15,
    color: "#ff3b72",
    marginTop: 17,
  },
  numbercardbtn: {
    marginBottom: 15,
    width: 80,
    elevation: 2,
  },
  inputno: {
    minWidth: 40,
    padding: 6,
    paddingBottom: 4,
    borderColor: "#ff1759",
    borderWidth: 2,
    borderRadius: 8,
    textAlign: "center",
    margin: 7,
    fontWeight: "bold",
    color: "#a940ff",
    fontSize: 20,
  },
});

export default Startscreen;

/*
borderColor:'black',
borderWidth:2,
*/
