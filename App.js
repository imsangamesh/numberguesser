import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Startscreen from "./components/startscreen";
import GuessScreen from "./components/guessscreen";
import Header from "./components/Header";
import EndScreen from "./components/endScreen";
 
const myFonts = {
  gameish: require("./assets/fonts/Comforter-Regular.ttf"),
  mainfont: require("./assets/fonts/BalsamiqSans-Regular.ttf"),
};

export default function App() {
  const [finalnoofguesses, setFinalnoofGuesses] = useState(0);
  const [screen, setscreen] = useState("ss");
  const [currGuess, setcurrGuess] = useState();
  const [gameOver, setGameOver] = useState(0);

  let visibleScreen = (
    <Startscreen setcurrGuess={setcurrGuess} setscreen={setscreen} />
  );
  const restartHandler = () => {
    setcurrGuess(null);
    setscreen("ss");
    setFinalnoofGuesses(0);
    setGameOver(0);
  };
  if (currGuess != null && gameOver == 0) {
    visibleScreen = (
      <GuessScreen
        setcurrGuess={setcurrGuess}
        setGameOver={setGameOver}
        setFinalnoofGuesses={setFinalnoofGuesses}
        currGuess={currGuess}
      />
    );
  } else if (gameOver == 1) {
    visibleScreen = (
      <EndScreen
        restartHandler={restartHandler}
        userno={currGuess}
        nor={finalnoofguesses}
      />
    );
  }

  return (
    <View>
      <Header style={styles.header}>
        <Text>Guess Number</Text>
      </Header>
      <View>{visibleScreen}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
