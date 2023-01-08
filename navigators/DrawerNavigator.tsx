import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer"
import { ParamListBase } from '@react-navigation/native'
import { CategoriesScreen } from '../screens/CategoriesScreen'
import { FavoritesScreen } from '../screens/FavoritesScreen'
import { CategoriesScreenProps, RootStackParamList, RootStackScreenProps } from '../types'

const Drawer = createDrawerNavigator<RootStackParamList>()
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor: "#351401" },
      drawerInactiveTintColor: "#fff",
      drawerActiveTintColor: "#e0b196",
      drawerActiveBackgroundColor: "#3f2f25"
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size} />
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size} />
      }}/>
    </Drawer.Navigator>
  )
}