import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverViewScreen } from './screens/MealsOverViewScreen';
import { RootStackParamList } from './types';
import { MealDetailsScreen } from './screens/MealDetailsScreen';
import { DrawerNavigator } from './navigators/DrawerNavigator';
import FavoritesContextProvider from './store/context/favoritesContext';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" }
            }}
          >
            <Stack.Screen
              name='MealsCategories'
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='MealsOverView'
              component={MealsOverViewScreen}
              options={({ route, navigation }) => {
                const catTitle = route?.params?.title;
                return {
                  title: catTitle
                }
              }}
            />
            <Stack.Screen
              name='MealDetails'
              component={MealDetailsScreen}
              options={{
                title: "About the meal"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
