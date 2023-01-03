import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface SubTitleProps {
  children: ReactNode;
}
export const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  subTitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2
  }
})