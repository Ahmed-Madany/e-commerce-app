import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, RefreshControl } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function loadCart() {
    const stored = await AsyncStorage.getItem("cart");
    if (stored !== null) {
      setCart(JSON.parse(stored));
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadCart();
    setRefreshing(false);
  };

  function updateCart(newCart) {
    setCart(newCart);
    AsyncStorage.setItem("cart", JSON.stringify(newCart));
  }

  function increaseQuantity(idMeal) {
    const newCart = cart.map(item =>
      item.idMeal === idMeal ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newCart);
  }

  function decreaseQuantity(idMeal) {
    const newCart = cart
      .map(item =>
        item.idMeal === idMeal
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
      .filter(item => item.quantity > 0);
    updateCart(newCart);
  }

  function deleteItem(idMeal) {
    const newCart = cart.filter(item => item.idMeal !== idMeal);
    updateCart(newCart);
  }

  return (
    <ScrollView
      style={{ padding: 20 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.title}>Your Cart</Text>

      {cart.map((meal, index) => (
        <View key={index} style={styles.card}>

          <Image source={{ uri: meal.strMealThumb }} style={styles.img} />

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{meal.strMeal}</Text>
            <Text style={styles.cat}>{meal.strCategory}</Text>

            <View style={styles.qtyRow}>
              <TouchableOpacity onPress={() => decreaseQuantity(meal.idMeal)}>
<AntDesign name="minus-circle" size={24} color="black" />              </TouchableOpacity>

              <Text style={styles.qty}>{meal.quantity}</Text>

              <TouchableOpacity onPress={() => increaseQuantity(meal.idMeal)}>
<AntDesign name="plus-circle" size={24} color="black" />              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => deleteItem(meal.idMeal)}>
            <AntDesign name="delete" size={28} color="black" />
          </TouchableOpacity>

        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: { flexDirection: "row", backgroundColor: "#f1f1f1", padding: 10, borderRadius: 10, marginBottom: 15, alignItems: "center" },
  img: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  name: { fontSize: 16, fontWeight: "bold" },
  cat: { fontSize: 14, color: "gray" },
  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  qty: { fontSize: 18, marginHorizontal: 10 }
});
