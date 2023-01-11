import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import { DetailsScreenProps } from '../types';
import { MEALS } from '../mocks/dummy-data';
import { MealDetails } from '../components/MealDetails';
import { SubTitle } from '../components/MealDetail/SubTitle';
import { List } from '../components/MealDetail/List';
import { useContext, useLayoutEffect } from 'react';
import { IconButton } from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { removeFavorite, addFavorite } from "../store/redux/favoritsSlice"
// import { FavoritesContext } from '../store/context/favoritesContext';

export const MealDetailsScreen = ({ route, navigation }: DetailsScreenProps) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state: RootState) => state.favoriteMeals.ids);
  const dispatch = useDispatch();


  const mealId: any = route.params.mealId;

  const selectedMeal = MEALS.find((item: any) => item.id === mealId);

  const mealIsFavorite = favoriteMealsIds.includes(mealId);
  console.log(favoriteMealsIds);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          onPress={changeFavoriteStatusHandler}
          color={mealIsFavorite ? "yellow" : "white"}
        />
      }
    })
  }, [navigation, changeFavoriteStatusHandler])

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