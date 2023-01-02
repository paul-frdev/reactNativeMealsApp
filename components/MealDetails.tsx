
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface MealDetailsProps {
  duration: number | undefined;
  complexity: string | undefined;
  affordAbility: string | undefined;
}
export const MealDetails = ({ duration, complexity, affordAbility }: MealDetailsProps) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}</Text>
      <Text style={styles.detailItem}>{complexity}</Text>
      <Text style={styles.detailItem}>{affordAbility}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  },
  ItemPressed: {
    opacity: 0.5,
  }
})