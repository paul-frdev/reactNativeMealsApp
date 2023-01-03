
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface MealDetailsProps {
  duration: number | undefined;
  complexity: string | undefined;
  affordAbility: string | undefined;
  customStyle?: keyof unknown;
  textStyle?: { color: string };
}
export const MealDetails = ({ duration, complexity, affordAbility, customStyle, textStyle }: MealDetailsProps) => {
  return (
    <View style={[styles.details, customStyle]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordAbility}</Text>
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