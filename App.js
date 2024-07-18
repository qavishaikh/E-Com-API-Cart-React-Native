import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Home from './components/Home';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.apiText}>E-Commerce APP</Text>
        <Home />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  apiText: {
    color: 'yellow',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'red',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default App;
