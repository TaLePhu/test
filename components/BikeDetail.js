import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function BikeDetail({ route }) {
  const { bike } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: bike.imgPath }} />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.name}>{bike.name}</Text>
        <Text style={styles.price}>${bike.price}</Text>
        <Text style={styles.description}>
          This is a detailed description of {bike.name}. A great bike for all terrains and users!
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  infoWrapper: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#E94141',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
