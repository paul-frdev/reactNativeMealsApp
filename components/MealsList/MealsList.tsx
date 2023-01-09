import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import { MealItem } from './MealItem';

interface MealsListProps {
  items: any;
}
export const MealsList = ({ items }: MealsListProps) => {
  const renderMealItem = (itemData: any) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
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
        data={items}
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
