import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Mealdet({ route , navigation}) {
async function saveToStorage() {
  try {
    let cart = [];
    const oldCart = await AsyncStorage.getItem("cart");

    if (oldCart !== null) {
      cart = JSON.parse(oldCart);
    }

    const index = cart.findIndex(item => item.idMeal === meal.idMeal);

    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...meal, quantity: 1 });
    }

    await AsyncStorage.setItem("cart", JSON.stringify(cart));

    console.log("Added to cart");

  } catch (e) {
    console.log("Error:", e);
  }
}

  const { meal } = route.params;

  return (
    <View style={styles.fullScreen}>

      <ScrollView style={styles.container}>

        <Image 
          source={{ uri: meal.strMealThumb }}
          style={styles.img}
        />

        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.subTitle}>{meal.strCategory}</Text>

        <View style={styles.row}>
          <AntDesign name="star" size={18} color="#F5A623" />
          <Text style={styles.textrow}>4.7</Text>

          <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="#F5A623" />
          <Text style={styles.textrow}>Free Delivery</Text>

          <MaterialIcons name="timer" size={22} color="#F5A623" />
          <Text style={styles.textrow}>25 min</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.textrow}>Size</Text>

          <View style={styles.circle}>
            <Text style={styles.textInside}>10"</Text>
          </View>

          <View style={styles.circle}>
            <Text style={styles.textInside}>14"</Text>
          </View>

          <View style={styles.circle}>
            <Text style={styles.textInside}>18"</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          
          <View style={styles.category}>
            <AntDesign name="fire" size={24} color="#FF6F00" />
            <Text style={styles.catText}>All</Text>
          </View>

          <View style={styles.category}>
            <FontAwesome5 name="hotdog" size={24} color="#D35400" />
            <Text style={styles.catText}>Hot Dog</Text>
          </View>

          <View style={styles.category}>
            <MaterialCommunityIcons name="hamburger" size={24} color="#007AFF" />
            <Text style={styles.catText}>Burger</Text>
          </View>

          <View style={styles.category}>
            <MaterialCommunityIcons name="food-outline" size={24} color="#27AE60" />
            <Text style={styles.catText}>Meals</Text>
          </View>

          <View style={styles.category}>
            <MaterialCommunityIcons name="food-turkey" size={24} color="#E74C3C" />
            <Text style={styles.catText}>Turkey</Text>
          </View>

          <View style={styles.category}>
            <MaterialIcons name="fastfood" size={28} color="#FF6F00" />
            <Text style={styles.catText}>Fast Food</Text>
          </View>

        </ScrollView>
      <View >
        <TouchableOpacity style={styles.cartBtn}
  onPress={() => {
    saveToStorage();
    navigation.navigate("Cart");
  }}
>
  <MaterialCommunityIcons name="cart-plus" size={22} color="white" />
  <Text style={styles.cartText}>Add to Cart</Text>
</TouchableOpacity>

      </View>

      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: { 
    padding: 15,
  },
  img: { 
    width: '100%', 
    height: 250, 
    borderRadius: 15 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginTop: 15 
  },
  subTitle: { 
    fontSize: 16, 
    color: 'gray', 
    marginBottom: 20 
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10
  },
  textrow: {
    fontSize: 14,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    marginTop: 10
  },
  textInside: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  category: {
    alignItems: "center",
    marginRight: 20,
    marginTop: 20
  },
  catText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600"
  },

  cartBtn: {
    backgroundColor: "orange",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8
  },
  cartText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});
