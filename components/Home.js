import React from 'react'
import { ScrollView, StyleSheet, Text, View , TextInput, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>

        <View style={styles.header}>
          <MaterialIcons name="legend-toggle" size={28} color="gray" />
          <Text style={styles.deliver}>Deliver to</Text>
          <Entypo name="shopping-bag" size={28} color="black" />
        </View>

        <View style={styles.hi}>
          <Text style={styles.hiText}>Hey Ahmed, Good morning!</Text>
        </View>

        <View style={styles.search}>
          <EvilIcons name="search" size={28} color="gray" />
          <TextInput 
            style={{ flex: 1, marginLeft: 10 }}
            placeholder="Search dishes, restaurants"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.all}>
          <Text style={styles.hiText}>All Categories</Text>
          <Text>See All ▶</Text>
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

<View style={styles.all}>
          <Text style={styles.catText}>open Resturents</Text>
          <Text>See All ▶</Text>
        </View>

        <View style={styles.card}>
            <Image source={require('../assets/poto.jpg')} style={styles.img} />
            <Text>
                Rose graden resturent
            </Text>
            <Text>
                Burger-Chiken-Rice-Wings
            </Text>
  <View style={styles.row}>
      <AntDesign name="star" size={18} color="#F5A623" />
      <Text style={styles.textrow}>4.7</Text>
<MaterialIcons name="timer" size={24} color="black" />
      <Text style={styles.textrow}>25 min</Text>

      <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="black" />
      <Text style={styles.textrow}>Free Delivery</Text>
    </View>
        
        </View>
        
        <View style={styles.card}>
            <Image source={require('../assets/poto1.jpg')} style={styles.img} />
            <Text>
                Rose graden resturent
            </Text>
            <Text>
                Burger-Chiken-Rice-Wings
            </Text>
            <View style={styles.row}>
      <AntDesign name="star" size={18} color="#F5A623" />
      <Text style={styles.textrow}>4.7</Text>
<MaterialIcons name="timer" size={24} color="black" />
      <Text style={styles.textrow}>25 min</Text>

      <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="black" />
      <Text style={styles.textrow}>Free Delivery</Text>
    </View>
        </View>
        <View style={styles.card}>
            <Image source={require('../assets/poto2.jpg')} style={styles.img} />
            <Text style={styles.hiText}>
                Rose graden resturent
            </Text>
            <Text>
                Burger-Chiken-Rice-Wings
            </Text>
            <View style={styles.row}>
      <AntDesign name="star" size={18} color="#F5A623" />
      <Text style={styles.textrow}>4.7</Text>
<MaterialIcons name="timer" size={24} color="black" />
      <Text style={styles.textrow}>25 min</Text>

      <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="black" />
      <Text style={styles.textrow}>Free Delivery</Text>
    </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 5,   
  },

  deliver: {
    color: "#FF6F00",
    fontWeight: "bold",
    fontSize: 18
  },

  hi: {
    marginTop: 15,
    paddingHorizontal: 20
  },

  hiText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "600"
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginTop: 20
  },

  all: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20
  },category: {
  backgroundColor: "#f1f1f1",
  paddingVertical: 12,
  paddingHorizontal: 14,
  borderRadius: 15,
  marginRight: 15,
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
},

catText: {
  fontWeight: "600",
  color: "black"
},

card: {
  marginTop: 20,
  paddingHorizontal: 20
},
img: {
  width: "100%",
  height: 200,
  borderRadius: 10
},row: {
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  marginTop: 10
},textrow: {
  fontSize: 14,
},


})

