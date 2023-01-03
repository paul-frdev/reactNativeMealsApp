import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ListProps {
  data: string[] | any;
}
export const List = ({ data }: ListProps) => {
  return (
    <>
      {data?.map((item: any) => (
        <View style={styles.listItem}>
          <Text key={item} style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  )
}


const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497"
  },
  itemText: {
    color: "#351401",
    textAlign: "center"
  }
})