import { StyleSheet, Text, View } from 'react-native'

export const MealsOverViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meals overview screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})