import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const PlaygroundScreen = () => {
  const name = "Ann ja";
  return (
    <ViewA>
      <Text style={styles.a}>AA Getting started with React Native</Text>
      <Text style={styles.b}>My name is {name}</Text>
      <FlatList showsHorizontalScrollIndicator></FlatList>

      <TouchableOpacity>
        <Text>AA</Text>
        <Text>AA</Text>
      </TouchableOpacity>
    </ViewA>
  );
};

const ViewA = ({ children }) => {
  console.log({ children });
  return children;
};

//JSX expressions must have one parent element. why?
// thu the fresh eye of ppl who is new in react or react native development(previous me 2 years ago) at that time i have a question around
// how to return multiple html tag in react or react native[/]? angular? is it rule only for react? and why?  https://dillionmegida.com/p/why-jsx-expressions-must-have-one-parent/

const styles = StyleSheet.create({
  a: { fontSize: 45 },
  b: { fontSize: 20 },
});

export default PlaygroundScreen;