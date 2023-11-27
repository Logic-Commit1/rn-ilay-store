import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  StyleSheet
} from 'react-native';
import { COLORS } from '~/constants';
import SearchProductList from '~/components/SearchProductList';

const Search: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Search..." style={styles.searchBar} />
      <SearchProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    paddingHorizontal: 20
  },
  searchBar: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.gray2
  }
});

export default Search;
