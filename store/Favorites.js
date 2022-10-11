import { createContext, useState } from "react";

export const FavoritesProvider = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const Favorites = ({ children }) => {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoritesMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  // Nếu filter nhận giá trị true nó sẽ thêm true vào mảng mới
  const removeFavorite = (id) => {
    setFavoritesMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoritesMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesProvider.Provider value={value}>
      {children}
    </FavoritesProvider.Provider>
  );
};

export default Favorites;
