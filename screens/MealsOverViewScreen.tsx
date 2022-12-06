import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useRoute } from "@react-navigation/native"
import { ProfileScreenRouteProp } from '../types';
import { MEALS } from '../mocks/dummy-data';
import { MealItem } from '../components/MealItem';



export const MealsOverViewScreen = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData: any) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordAbility: item.affordability
    }
    return (
      <MealItem {...mealItemProps} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item: any) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})