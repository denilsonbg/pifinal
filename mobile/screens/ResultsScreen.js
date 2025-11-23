import { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity } from "react-native";

export default function ResultsScreen({ route, navigation }) {
  const { categoria, coords } = route.params;
  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/estabelecimentos?categoria=${categoria}`)
      .then(res => setLista(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Resultados</Text>

      {lista.map(item => (
        <TouchableOpacity 
          key={item.id}
          onPress={() => navigation.navigate("Detalhes", { item })}
          style={{ padding: 10, borderBottomWidth: 1 }}
        >
          <Text>{item.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}