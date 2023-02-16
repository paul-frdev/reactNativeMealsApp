import React from 'react'
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

interface IconButtonProps {
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  color?: string;
  customStyles?: any,
}
export const IconButton = ({ onPress, icon = "star", color, customStyles }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [customStyles, pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  }
})