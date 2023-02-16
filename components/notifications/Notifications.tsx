import React, { useEffect, useLayoutEffect } from 'react'
import { Button, StyleSheet, View } from 'react-native';
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    }
  }
});

const allowsNotificationsAsync = async () => {
  const settings = await Notifications.getPermissionsAsync();
  return (
    settings.granted ||
    settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
};

const requestPermissionsAsync = async () => {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
};

export const Notification = () => {

  useEffect(() => {
   const subscription1 = Notifications.addNotificationReceivedListener((notification) => {
      console.log("Notification received");
    });

   const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("Notification responsed");
      console.log(response);
    })
    return () => {
      subscription1.remove();
      subscription2.remove();
    }
  }, [])
  const scheduleNotificationHandler = async () => {

    const hasPushNotificationPermissionGranted =
      await allowsNotificationsAsync();


    if (!hasPushNotificationPermissionGranted) {
      await requestPermissionsAsync();
    }

    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is th body of the notification.",
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 2,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Button title='schedule notifications' onPress={scheduleNotificationHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});