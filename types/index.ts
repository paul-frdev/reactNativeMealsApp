import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverView: { categoryId: string; title?: string };
  MealDetails: { mealId: string };
};

export type PropNav = NativeStackScreenProps<
  RootStackParamList,
  "MealsCategories",
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
