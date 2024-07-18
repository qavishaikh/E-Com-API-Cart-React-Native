import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import {CartProvider} from './CartContext';
import CustomButton from './CustomButton';
import Cart from './Cart';

const Home = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setStoreData(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <ScrollView>
      <Cart />
      {storeData.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.category}>{product.category}</Text>
          <Image source={{uri: product.image}} style={styles.image} />
          <CustomButton title="Buy" product={product} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 335,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 20,
    marginBottom: 5,
    textTransform: 'capitalize',
    color: 'black',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
});

export default function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}
