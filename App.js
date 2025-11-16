import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import Home from './components/Home';
// import Login from './components/Login';


export default function App() {
  return (
 <ScrollView>
  {/* <Welcome /> */}
  {/* <Login /> */}
  <Home />


  </ScrollView>
  );
}