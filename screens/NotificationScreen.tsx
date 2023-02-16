import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Notification } from '../components/notifications/Notifications';

export const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Notification />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})