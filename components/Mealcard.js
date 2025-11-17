import { View, Text, Image, StyleSheet, Modal, Button } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

export default function Mealcard({ Meal }) {
    const [modalVisible, setVisible] = useState(false);

  return (

    <View style={styles.card}>
      <Image 
        source={{ uri: Meal.strMealThumb }} 
        style={styles.img}
      />

      <Text style={styles.title}>{Meal.strMeal}</Text>

      <View style={styles.row}>
        <Text style={styles.category}>{Meal.strCategory}</Text>
        <TouchableOpacity onPress={() => setVisible(true)}>
        <Ionicons name="add-circle" size={26} color="orange" />

<Modal 
  visible={modalVisible} 
  transparent={true}
  animationType="slide"
  onRequestClose={() => setVisible(false)}
>
  <View style={{
    flex: 1,
    alignItems: "center", 
    justifyContent: "center", 
  }}>
    
    <View style={{
      width: 300,
      padding: 20,
      borderRadius: 15,
      backgroundColor: "#FF6F00",
      alignItems: "center",
      position: "relative"
    }}>

      <TouchableOpacity 
        onPress={() => setVisible(false)} 
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        <AntDesign name="close-circle" size={24} color="white" />
      </TouchableOpacity>

      <AntDesign name="shopping-cart" size={50} color="orange" style={{ marginTop: 10 ,backgroundColor: "white", padding: 10, borderRadius: 50 }} />
      <Text style={{
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        marginTop: 10
      }}>
        Add to Cart
      </Text>
      <Text style={{ fontSize: 14, color: "white", marginTop: 20 ,textAlign: "center" , fontStyle: "italic"}}>
        your item has been successfully added to your shopping cart
      </Text>

    </View>

  </View>
</Modal>
        </TouchableOpacity>
      </View>
    </View>



  


  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginBottom: 25,
    width: 160,
    elevation: 2
    

  },
  img: {
    width: "100%",
    height: 110,
    borderRadius: 10
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center"
  },
  category: {
    fontSize: 12,
    color: "gray"
  }
});
