import { FlatList, StyleSheet, Text, View } from 'react-native';
import SearchProductListItem from './SearchProductListItem';
import { Product } from '~/data/Product';

interface SearchProductListProps {
  products: Product[];
}

const SearchProductList: React.FC<SearchProductListProps> = ({ products }) => {
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
          paddingBottom: 220,
          padding: 8
        }}
      />
    </View>
  );
};

export default SearchProductList;

const styles = StyleSheet.create({
  container: {
    margin: 20
  }
});
