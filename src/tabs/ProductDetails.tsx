import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetails: React.FC = ({ route }) => {
    const { imageSource, itemName, itemWeight, itemPrice } = route.params;
  
    <View style={styles.container}>
      <Text>Product Details Screen</Text>
    </View>
  };

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  }
})