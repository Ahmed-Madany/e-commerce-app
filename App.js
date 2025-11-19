import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Review from './components/Review';
import Mealdet from './components/Mealdet';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mealdet" component={Mealdet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
