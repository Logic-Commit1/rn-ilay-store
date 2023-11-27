import { FlatList, StyleSheet, Text, View } from 'react-native';
import SearchProductListItem from './SearchProductListItem';
import { useProducts } from '../utils/productUtil';

const SearchProductList = () => {
  const { loading, products } = useProducts();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <SearchProductListItem
            imageSource={item.image_url}
            name={item.name}
            weight={item.weight}
            price={item.price}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          rowGap: 20,
          paddingBottom: 100,
          padding: 8
        }}
      />
    </View>
  );
};

export default SearchProductList;

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
});
