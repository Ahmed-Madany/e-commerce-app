import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './components/Home';
import Review from './components/Review';
import Mealdet from './components/Mealdet';
import { ThemeProvider } from './context/ThemeContext';
import { useState } from 'react';
import Cart from './components/Cart';

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function MyTabs() {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          )
        }}
      />

      <Bottom.Screen
        name="Review"
        component={Review}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="star" size={24} color={color} />
          )
        }}
      />
      <Bottom.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarIcon: ({ color }) => (
          <AntDesign name="shopping-cart" size={24} color={color} />
        )
      }}
    />
    </Bottom.Navigator>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false)

  return (

    <ThemeProvider value={{isDark, setIsDark}}>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Tabs" 
          component={MyTabs} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Mealdet" 
          component={Mealdet} 
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}
