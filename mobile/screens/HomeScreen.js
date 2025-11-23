import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);

  async function obterLocalizacao() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão negada!");
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);

    navigation.navigate("Categorias", {
      coords: loc.coords
    });
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Localiza Fácil</Text>
      <Button title="Buscar Estabelecimentos" onPress={obterLocalizacao} />
    </View>
  );
}