import { useLayoutEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealsDetailScreen = (props) => {
  //   console.log(props.route.params.id);
  const catId = props.route.params.id;

  const selectedMeal = MEALS.find((meal) => meal.id === catId);
  // console.log(selectedMeal);
  const headerButtonPressHandler = () => {
    console.log("pressHandler");
  };

  props.navigation.setOptions({
    title: selectedMeal.title,
  });
  // console.log(selectedMeal.imageUrl);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="#fff"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  });
  return (
    <View style={styles.root}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          affordbality={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
          style={styles.detailText}
        />
        <View style={styles.outterList}>
          <View style={styles.listContainer}>
            <SubTitle>Ingredient</SubTitle>
            <List data={selectedMeal.ingredients} />
            <SubTitle>Steps</SubTitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MealsDetailScreen;
const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  outterList: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
