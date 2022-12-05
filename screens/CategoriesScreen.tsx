import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet } from 'react-native'
import { CategoryGridTile } from '../components/CategoryGridTile'
import { CATEGORIES } from '../mocks/dummy-data'

type NavProps = {
  navigate: (data: string) => void;
  goBack: () => void;
}

export const CategoriesScreen = () => {
  const { navigate } = useNavigation<NavProps>();
  
  const renderCategoryItem = (itemData: any) => {
    const pressHandler = () => {
      navigate('mealsOverView');
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

