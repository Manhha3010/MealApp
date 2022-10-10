import { StyleSheet, View, Text } from "react-native";

const MealDetails = (props) => {
  return (
    <View style={[styles.detail, props.style]}>
      <Text style={[styles.detailItem, props.style]}>{props.duration}m</Text>
      <Text style={[styles.detailItem, props.style]}>
        {props.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, props.style]}>
        {props.affordbality.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 16,
  },
});
