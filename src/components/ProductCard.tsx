import React from 'react';
import { Platform } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';

interface ProductCardProps {
  imageSource: string;
  itemName: string;
  itemWeight: number;
  itemPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSource,
  itemName,
  itemWeight,
  itemPrice
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.productImageContainer}>
        <Image
          source={{ uri: `${imageSource}` }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={{ flexGrow: 1, ...styles.productDetails }}>
        <Text style={styles.name}>
          {itemName} ({itemWeight}g)
        </Text>
        <Text style={styles.price}>₱ {itemPrice}.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 155,
    borderRadius: 5,
    boxShadow: '0px 2px 6px 1px rgba(0,0,0,0.45)',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.45)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 6
      },
      android: {
        elevation: 6
      }
    })
  },
  image: {
    padding: 35,
    marginVertical: 10
  },
  productDetails: {
    backgroundColor: '#FFB9B9',
    padding: 5,
    paddingBottom: 10,
    height: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    marginBottom: 5
  },
  price: {
    fontFamily: 'Poppins',
    fontSize: 10,
    position: 'absolute',
    bottom: 2,
    left: 5
  },
  productImageContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  }
});

export default ProductCard;
