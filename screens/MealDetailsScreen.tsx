import { View, Text, StyleSheet, Image } from 'react-native'
import { DetailsScreenProps } from '../types';
import { MEALS } from '../mocks/dummy-data';
import { MealDetails } from '../components/MealDetails';

export const MealDetailsScreen = ({ route }: DetailsScreenProps) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((item: any) => item.id === mealId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMeal?.imageUrl }} />
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordAbility={selectedMeal?.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient: any) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>{selectedMeal?.steps.map((step: any) => (
        <Text key={step}>{step}</Text>
      ))}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})