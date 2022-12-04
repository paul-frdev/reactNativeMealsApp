import { FlatList, StyleSheet } from 'react-native'
import { CategoryGridTile } from '../components/CategoryGridTile'
import { CATEGORIES } from '../mocks/dummy-data'

const renderCategoryItem = (itemData: any) => {
  return (
    <CategoryGridTile categoryTitle={itemData.item.title} categoryColor={itemData.item.color} />
  )
}
export const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

