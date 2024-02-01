import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '~/constants';

interface SearchProductListItemProps {
  imageSource: string;
  name: string;
  weight: number;
  price: number;
}

const SearchProductListItem: React.FC<SearchProductListItemProps> = ({
  imageSource,
  name,
  weight,
  price
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: `${imageSource}` }} style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>
          {name} ({weight}g)
        </Text>
        <Text style={styles.productWeight}></Text>
        <Text style={styles.productPrice}>₱ {price}</Text>
      </View>
    </View>
  );
};

export default SearchProductListItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray,
    flexDirection: 'row'
  },
  imageContainer: {
    width: 70,
    height: 70
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  productDetails: {
    flex: 1,
    marginLeft: 20
  },
  productName: {
    fontFamily: 'Poppins'
  },
  productWeight: {
    fontFamily: 'Poppins',
    color: '#353535',
    marginTop: -2,
    fontSize: 13
  },
  productPrice: {
    fontFamily: 'Poppins'
  }
});
