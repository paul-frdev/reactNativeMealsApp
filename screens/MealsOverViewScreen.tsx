import { useRoute } from "@react-navigation/native"
import { ProfileScreenRouteProp } from '../types';
import { MEALS } from '../mocks/dummy-data';
import { MealsList } from '../components/MealsList/MealsList';

export const MealsOverViewScreen = () => {

  const routeMeal = useRoute<ProfileScreenRouteProp>();
  const catId = routeMeal.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <MealsList items={displayedMeals}/>
  )
}
