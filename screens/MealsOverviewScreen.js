import { useLayoutEffect } from "react";
import MealList from "../components/MealList";
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

  return <MealList items={displayedMeals} />;
};

export default MealsOverviewScreen;
