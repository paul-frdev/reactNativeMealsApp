import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverViewScreen } from './screens/MealsOverViewScreen';
import { RootStackParamList } from './types';
import { MealDetailsScreen } from './screens/MealDetailsScreen';
import { DrawerNavigator } from './navigators/DrawerNavigator';
import FavoritesContextProvider from './store/context/favoritesContext';
import { store } from './store/redux/store';
import { Provider } from 'react-redux';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
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
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

