import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Mealcard from './Mealcard';
export default function Review({ navigation }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  async function getdata() {
    try {
      const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
      setData(res.data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  const searchmeal = data.filter((item) =>
    item.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ScrollView>
        <View style={styles.search}>
          <EvilIcons name="search" size={28} color="gray" />
          <TextInput
            style={{ flex: 1, marginLeft: 10 }}
            placeholder="Search dishes, restaurants"
            placeholderTextColor="#aaa"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </ScrollView>

      <FlatList
        data={searchmeal}
        renderItem={({ item }) => (
          <Mealcard Meal={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginTop: 40,
  },
});
