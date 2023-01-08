import { FlatList } from 'react-native'
import { CategoryGridTile } from '../components/CategoryGridTile'
import { CATEGORIES } from '../mocks/dummy-data'
import { PropNav } from '../types';


export const CategoriesScreen = ({ navigation }: PropNav) => {

  const renderCategoryItem = (itemData: any) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverView', { categoryId: itemData.item.id, title: itemData.item.title });
    }
    return (
      <CategoryGridTile
        categoryTitle={itemData.item.title}
        categoryColor={itemData.item.color}
        onPress={pressHandler}
      />
    )
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

