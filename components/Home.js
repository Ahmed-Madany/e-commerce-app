import React from 'react'
import { ScrollView, StyleSheet, Text, View , TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';

function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={['top']}>
      <StatusBar style="auto" />

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
    marginTop: 10,
  },

  deliver: {
    color: "#FF6F00",
    fontWeight: "bold",
    fontSize: 18
  },

  hi: {
    marginTop: 20,
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
  }

})

export default Home
