import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import { DetailsScreenProps } from '../types';
import { MEALS } from '../mocks/dummy-data';
import { MealDetails } from '../components/MealDetails';
import { SubTitle } from '../components/MealDetail/SubTitle';
import { List } from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import { IconButton } from '../components/IconButton';

export const MealDetailsScreen = ({ route, navigation }: DetailsScreenProps) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((item: any) => item.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("Pressed");

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton
          onPress={headerButtonPressHandler}
          color="white"
        />
      }
    })
  }, [navigation, headerButtonPressHandler])

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