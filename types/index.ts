import { RouteProp } from '@react-navigation/native';


export type RootStackParamList = {
  CategoriesScreen: undefined;
  MealsOverViewScreen: { categoryId: string };
};

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'MealsOverViewScreen'>;

export type NavProps = {
  navigate: (data: string) => void;
  goBack: () => void;
}