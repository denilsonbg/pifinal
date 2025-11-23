import { View, Text, Button, Linking } from "react-native";

export default function DetailsScreen({ route }) {
  const { item } = route.params;

  function abrirRotaGoogle() {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lng}`;
    Linking.openURL(url);
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{item.nome}</Text>

      <Button title="Abrir no Google Maps" onPress={abrirRotaGoogle} />
    </View>
  );
}