import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MealsList } from '../components/MealsList/MealsList'
import { MEALS } from '../mocks/dummy-data';
import { FavoritesContext } from '../store/context/favoritesContext'

export const FavoritesScreen = () => {
  const favoritesCtx = useContext(FavoritesContext);
  const favoritesMeals = MEALS.filter((meal: any) => favoritesCtx.ids.includes(meal.id));

  if (!favoritesMeals.length) {
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