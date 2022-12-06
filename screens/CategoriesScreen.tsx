import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet } from 'react-native'
import { CategoryGridTile } from '../components/CategoryGridTile'
import { CATEGORIES } from '../mocks/dummy-data'
import { RootStackParamList } from '../types';


type PropNav = NativeStackScreenProps<RootStackParamList, "CategoriesScreen", "MealsOverViewScreen">;

export const CategoriesScreen = ({ navigation }: PropNav) => {

  const renderCategoryItem = (itemData: any) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverViewScreen', { categoryId: itemData.item.id });
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

