import { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Card from "./card";
import Colors from "../constants/colors";

const GuessScreen = (props) => {
  const [noofguesses, setnoofGuesses] = useState(1);
  const userguess = props.currGuess;
  const guessmachine = (max, min, exclude) => {
    max = Math.floor(max);
    min = Math.ceil(min);
    const rndno = Math.floor(Math.random() * (max - min)) + min;
    if (rndno === exclude) {
      return guessmachine(max, min, exclude);
    } else {
      return rndno;
    }
  };
  const currHigh = useRef(100);
  const currLow = useRef(1);

  useEffect(() => {
    if (userguess == currguess) {
      props.setcurrGuess(currguess);
      props.setFinalnoofGuesses(noofguesses);
      props.setGameOver(1);
    }
  });

  const nextNumberGuesser = (direction) => {
    if (
      (currguess > userguess && direction == "high") ||
      (currguess < userguess && direction == "low")
    ) {
      Alert.alert("don't lie", "please be faithful in your life :) ", [
        { text: "sorry", style: "destructive" },
      ]);
      return;
    }
    if (direction == "low") {
      currHigh.current = currguess;
    } else {
      currLow.current = currguess;
    }

    const nextNumber = guessmachine(
      currHigh.current,
      currLow.current,
      currguess
    );
    setcurrguess(nextNumber);
    setmadeguesses((curr) => [nextNumber, ...curr]);
    setnoofGuesses((currnoofguess) => currnoofguess + 1);
  };

  const [currguess, setcurrguess] = useState(guessmachine(1, 100, userguess));
  const [madeguesses, setmadeguesses] = useState([currguess]);

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>your number might be </Text>
        <Card style={styles.innercard}>
          <Text> {currguess} </Text>
        </Card>
      </Card>
      <View style={styles.btncontainer}>
        <AntDesign
          name="minuscircle"
          size={36}
          color={Colors.thirdpurple}
          onPress={nextNumberGuesser.bind(this, "low")}
        />

        <AntDesign
          name="pluscircle"
          size={36}
          color={Colors.thirdpurple}
          onPress={nextNumberGuesser.bind(this, "high")}
        />
      </View>
      <View style={styles.scrollview}>
        <Text style={styles.listtitle}>My Guesses are </Text>
        <FlatList
          contentContainerStyle={styles.flatlist}
          data={madeguesses}
          renderItem={(i) => (
            <View key={i.index} style={styles.listview}>
              <Text># {i.index + 1}</Text>
              <Text style={styles.listtext}>{i.item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
    padding: 15,
  },
  card: {
    width: "55%",
    marginTop: 25,
  },
  innercard: {
    width: 50,
    marginTop: 20,
    marginBottom: 8,
  },
  btncontainer: {
    padding: 2,
    margin: 15,
    width: "55%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  scrollview: {
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  
    height: "60%",
  },
  flatlist: {
    alignItems: "center",
  },
  listview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#e6e6e6",
    borderWidth: 1,
    borderColor: "#949494",
    marginBottom: 10,
    width: "60%",
    padding: 6,
    alignItems: "center",
    borderRadius: 5,
  },
  listtext: {
    fontSize: 17,
  },
  listtitle:{
    fontSize:18,
    paddingBottom:13,
    color:Colors.thirdred,
    fontWeight:'bold'
  }
});

export default GuessScreen;
