import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { DetailsScreenProps } from '../types';
import { MEALS } from '../mocks/dummy-data';
import { MealDetails } from '../components/MealDetails';
import { SubTitle } from '../components/MealDetail/SubTitle';
import { List } from '../components/MealDetail/List';

export const MealDetailsScreen = ({ route }: DetailsScreenProps) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((item: any) => item.id === mealId);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: selectedMeal?.imageUrl }}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordAbility={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal?.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white"
  },
  detailText: {
    color: "white"
  },
  listOuterContainer: {
    alignItems: "center"
  },
  listContainer: {
    width: "80%"
  }
})