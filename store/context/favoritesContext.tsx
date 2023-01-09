import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id: any) => { },
  removeFavorite: (id: any) => { },
});

const FavoritesContextProvider = ({ children }: any) => {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState<any>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealsIds((currentFavIds: any) => [...currentFavIds, id])
  }
  const removeFavorite = (id: string) => {
    setFavoriteMealsIds((currenFavIds: any) => currenFavIds.filter((itemId: any) => id !== itemId ));
  }

  const value = {
    ids: favoriteMealsIds,
    addFavorite,
    removeFavorite
  }
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;