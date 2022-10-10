import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverviewScreen = (props) => {
  const catId = props.route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  // console.log(displayedMeals);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    // console.log(categoryTitle);
    // set ttile động theo id

    props.navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, props.navigation]);

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
      props.navigation.navigate("MealsDetailScreen", { id: item.id });
    };
    return <MealItem {...mealItemProps} onPress={goToMealsDetails} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
