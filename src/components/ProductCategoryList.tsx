import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { useProducts } from '../utils/productUtil';
import { COLORS } from '~/constants';

interface ProductCategoryListProps {
  activeCategory: string;
  setActiveCategory: (types: string) => void;
}

const ProductCategoryList: React.FC<ProductCategoryListProps> = ({
  activeCategory,
  setActiveCategory
}) => {
  const { categories } = useProducts();

  const renderItem = ({ item }: any) => (
    <Pressable
      style={[
        styles.categoryItem,
        item.toLowerCase() === activeCategory.toLowerCase() && styles.active
      ]}
      onPress={() => {
        setActiveCategory(item);
      }}
    >
      <Text style={styles.categoryName}>{item}</Text>
    </Pressable>
  );

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          columnGap: 10
        }}
        style={styles.categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={6}
      />
    </View>
  );
};

export default ProductCategoryList;

const styles = StyleSheet.create({
  categoryItem: {
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15
  },
  active: {
    backgroundColor: COLORS.tertiary
  },
  categoryList: {
    marginTop: 20,
    marginStart: 20
  },
  categoryName: {
    fontFamily: 'Poppins'
  }
});
