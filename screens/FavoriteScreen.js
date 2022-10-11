import { useContext, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { FavoritesProvider } from "../store/Favorites";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavoriteScreen = () => {
  const favMeals = useContext(FavoritesProvider);
  console.log(favMeals);

  const favoritesMeals = MEALS.filter((meal) => favMeals.ids.includes(meal.id));

  return <MealList items={favoritesMeals} />;
};

export default FavoriteScreen;
