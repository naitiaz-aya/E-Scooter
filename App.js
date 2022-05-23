import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native";
// import Home from "./src/screens/HomeScreen/Home";
export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getListPhotos;
    return () => {
      
    };
  }, []);

  getListPhotos = () => {
    const apiURL = "https://jsonplaceholder.typicode.com/photos";
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      })
      .catch((error) => {
        console.log("Request API Error:", error);
      })
      .finally(() => setIsLoading(false));
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
		  <Image
			  style={styles.image}
			  source={{uri: item.url}}
		  />
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => `key-${item.id}`}
          renderItem={renderItem}
		  contentContainerStyle={{
			  padding: 20
		  }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    // backgroundColor: "#ADEFD1",
    // backgroundColor: "#45FRF7",
    alignItems: "center",
    justifyContent: "center",
  },
});
