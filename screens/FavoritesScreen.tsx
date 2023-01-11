import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { MealsList } from '../components/MealsList/MealsList'
import { MEALS } from '../mocks/dummy-data';
import { FavoritesContext } from '../store/context/favoritesContext'
import { RootState } from '../store/redux/store';

export const FavoritesScreen = () => {
  // const favoritesCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state: RootState) => state.favoriteMeals.ids)
  const favoritesMeals = MEALS.filter((meal: any) => favoriteMealsIds.includes(meal.id));

  if (!favoriteMealsIds.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorites meals yet</Text>
      </View>
    )
  }
  return (
    <MealsList items={favoritesMeals} />
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "white"
  }
})