import { View, Button, Text } from "react-native";

export default function CategoryScreen({ navigation, route }) {
  const coords = route.params.coords;

  function go(cat) {
    navigation.navigate("Resultados", { categoria: cat, coords });
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Categorias</Text>

      <Button title="Restaurantes" onPress={() => go("restaurante")} />
      <Button title="Farmácias" onPress={() => go("farmacia")} />
      <Button title="Mercados" onPress={() => go("mercado")} />
      <Button title="Postos" onPress={() => go("posto")} />
    </View>
  );
}