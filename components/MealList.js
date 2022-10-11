import { useNavigation } from "@react-navigation/native";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

function MealList(props) {
  const navigation = useNavigation();
  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordbality: item.affordability,
    };
    const goToMealsDetails = () => {
      navigation.navigate("MealsDetailScreen", { id: item.id });
    };
    return <MealItem {...mealItemProps} onPress={goToMealsDetails} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
