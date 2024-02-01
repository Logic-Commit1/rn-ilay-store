import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  StyleSheet,
  FlatList
} from 'react-native';
import { COLORS } from '~/constants';
import SearchProductList from '~/components/SearchProductList';
import { useProducts } from '../utils/productUtil';
import { useState, useEffect } from 'react';
import ProductCategoryList from '../components/ProductCategoryList';

const Search: React.FC = () => {
  const { categories, products } = useProducts();
  const [searchText, setSearchText] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }: any) => (
    <Pressable style={styles.categoryItem}>
      <Text style={styles.categoryName}>{item}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.searchBar}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <ProductCategoryList
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <SearchProductList products={filteredProducts} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  searchBar: {
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.darkWhite,
    fontFamily: 'Poppins',
    elevation: 1
  },
  categoryItem: {
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15
  },
  categoryList: {
    marginTop: 20,
    marginStart: 20
  },
  categoryName: {
    fontFamily: 'Poppins'
  }
});

export default Search;
