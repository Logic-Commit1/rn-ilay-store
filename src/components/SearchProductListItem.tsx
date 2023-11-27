import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '~/constants';
import { hotdogImage } from '~/constants/icons';

interface SearchProductListItemProps {
  imageSource: string;
  name: string;
  weight: number;
  price: number;
}

const SearchProductListItem = (props: SearchProductListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${props.imageSource}` }}
          style={styles.productImage}
        />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{props.name}</Text>
        <Text style={styles.productPrice}>₱ {props.price}</Text>
      </View>
    </View>
  );
};

export default SearchProductListItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
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
    marginLeft: 20
  },
  productName: {
    fontFamily: 'Poppins'
  },
  productPrice: {
    fontFamily: 'Poppins'
  }
});
