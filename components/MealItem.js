import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import MealDetails from "./MealDetails";

const MealItem = (props) => {
  //   console.log(props);
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <Text style={styles.title}>{props.title} </Text>
          </View>
          <MealDetails
            duration={props.duration}
            complexity={props.complexity}
            affordbality={props.affordbality}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {},
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
});
