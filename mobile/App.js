import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ResultsScreen from './screens/ResultsScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Categorias" component={CategoryScreen} />
        <Stack.Screen name="Resultados" component={ResultsScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}