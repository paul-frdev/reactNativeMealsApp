import { useRoute } from '@react-navigation/native';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { DetailsScreenProps, DetailsScreenRouteProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { MealDetails } from '../MealDetails';

interface MealItemProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordAbility: string;
  callBack?: (data: string) => void;
}
export const MealItem = ({ title, id, imageUrl, duration, complexity, affordAbility, callBack }: MealItemProps) => {
  const navigation = useNavigation<any>();

  const pressHandler = () => {
    navigation.navigate("MealDetails", {
      mealId: id
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed && styles.ItemPressed]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails 
          duration={duration}
          complexity={complexity}
          affordAbility={affordAbility}
          />
        </View>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible"
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: '700',
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  ItemPressed: {
    opacity: 0.5,
  }
})