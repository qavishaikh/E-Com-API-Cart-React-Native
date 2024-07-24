import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CartContext} from './CartContext';

const Cart = () => {
  const {cart} = useContext(CartContext);

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      {cart.map((product, index) => (
        <View key={index} style={styles.cartItem}>
        
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </View>
      ))}
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'yellow',
    backgroundColor: 'black',
    width: 340,
    textTransform: 'uppercase',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
    width: 250,
  },
  price: {
    fontSize: 20,
    width: 100,
    color: 'red',
    fontWeight: 'bold',
  },
  total: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'yellow',
    backgroundColor: 'black',
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 50,
  },
});

export default Cart;
