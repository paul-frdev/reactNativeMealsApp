import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Categories: undefined;
  MealsCategories: undefined;
  Favorites: undefined;
  MealsOverView: { categoryId: string; title?: string };
  MealDetails: { mealId: string };
  Notification: undefined;
};

export type PropNav = NativeStackScreenProps<
  RootStackParamList,
  "Categories",
  "MealsOverView"
>;
export type ProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  "MealsOverView"
>;
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetails"
>;
export type CategoriesScreenProps = DrawerNavigationProp<
  RootStackParamList,
  "Categories"
>;

export type DetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "MealDetails"
>;
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type NavProps = {
  navigate: (data: string) => void;
  goBack: () => void;
};
