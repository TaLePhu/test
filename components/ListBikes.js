
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "../redux/bikesSlice";

const Item = ({ imgUrl, name, price }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("BikeDetail")}
    >
      <Image style={styles.itemHeart} source={require("../assets/heart.png")} />
      <Image style={styles.itemImage} source={{ uri: imgUrl }} />
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}>${price}</Text>
    </TouchableOpacity>
  );
};

export default function ListBikes() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.bikes);

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <Item imgUrl={item.imgUrl} name={item.name} price={item.price} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7BA8326",
    borderRadius: 10,
    margin: 7,
    width: 200,
  },
  itemHeart: { position: "absolute", top: 5, left: 15 },
  itemImage: { margin: 15, width: 130, height: 130 },
  itemName: { padding: 10, fontSize: 20, fontWeight: "400", color: "#00000099" },
  itemPrice: { padding: 10, fontSize: 20, fontWeight: "400" },
});
