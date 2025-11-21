import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Mealcard({ Meal, navigation }) {

  const [modalVisible, setVisible] = useState(false);
   async function saveToStorage() {
  try {
    await AsyncStorage.setItem("meal", JSON.stringify(Meal));
    console.log("Saved Successfully");
  } catch (e) {
    console.log("Error Saving:", e);
  }
}

  async function getFormStoge() {
  try {
    const jsonValue = await AsyncStorage.getItem("meal");
    if(jsonValue !== null) {
      console.log("Stored Meal:", JSON.parse(jsonValue));
    }
  } catch (e) {
    console.log("Error Reading:", e);
  }
}

  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate("Mealdet", { meal: Meal })}
    >

      <Image 
        source={{ uri: Meal.strMealThumb }} 
        style={styles.img}
      />

      <Text style={styles.title} numberOfLines={1}>{Meal.strMeal}</Text>

      <View style={styles.row}>
        <Text style={styles.category}>{Meal.strCategory}</Text>

<TouchableOpacity
  onPress={() => {
    setVisible(true);
    navigation.navigate("Mealdet", { meal: Meal });
  }}
>
          <Ionicons name="add-circle" size={26} color="orange" />
        </TouchableOpacity>
      </View>

      
      <Modal 
        visible={modalVisible} 
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>

            <TouchableOpacity 
              onPress={() => setVisible(false)} 
              style={styles.closeBtn}
            >
              <AntDesign name="close-circle" size={24} color="white" />                                          
            </TouchableOpacity>
               
            <AntDesign 
              name="shopping-cart" 
              size={50} 
              color="orange" 
              style={styles.cartIcon} 
              onPress={saveToStorage}
            />
            <AntDesign 
              name="star" 
              size={50} 
              color="orange" 
              style={styles.cartIcon}
              onPress={getFormStoge}
            />

            <Text style={styles.modalTitle}>Add to Cart</Text>

            <Text style={styles.modalText}>
              Your item has been successfully added to your shopping cart
            </Text>

          </View>
        </View>
      </Modal>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginBottom: 25,
    width: 160,
    elevation: 3
  },
  img: {
    width: "100%",
    height: 110,
    borderRadius: 10
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10
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
  },


  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalBox: {
    width: 300,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#FF6F00",
    alignItems: "center",
    position: "relative"
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10
  },
  cartIcon: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: 10
  },
  modalText: {
    fontSize: 14,
    color: "white",
    marginTop: 20,
    textAlign: "center",
    fontStyle: "italic"
  }
});
