import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverViewScreen } from './screens/MealsOverViewScreen';
import { RootStackParamList } from './types';
import { MealDetailsScreen } from './screens/MealDetailsScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
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
            component={CategoriesScreen}
            options={{
              title: "All Categories",
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
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
