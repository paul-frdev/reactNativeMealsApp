import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'

interface CategoryGridTileProps {
  categoryTitle: string;
  categoryColor: string;
  onPress?: () => void;
}
export const CategoryGridTile = ({ categoryTitle, categoryColor, onPress }: CategoryGridTileProps) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: categoryColor }]}>
          <Text style={styles.title}>
            {categoryTitle}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible"
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
  }
})