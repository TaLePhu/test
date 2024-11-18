import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBikeToAPI } from '../redux/bikesSlice';
import { useNavigation } from '@react-navigation/native';

export default function AddBike() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imgPath, setImgPath] = useState('');

  const handleAddBike = () => {
    if (name && price && imgPath) {
      const newBike = { name, price, imgPath };
      dispatch(addBikeToAPI(newBike));
      setName('');
      setPrice('');
      setImgPath('');
      alert('Bike added successfully!');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Bike</Text>

      <TextInput
        style={styles.input}
        placeholder="Bike Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imgPath}
        onChangeText={setImgPath}
      />

      {imgPath ? (
        <Image style={styles.imagePreview} source={{ uri: imgPath }} />
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleAddBike}>
        <Text style={styles.buttonText}>Add Bike</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ListBikes")}>
        <Text style={styles.buttonText}>List Bikes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#E94141',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#E94141',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 20,
    alignSelf: 'center',
  },
});
