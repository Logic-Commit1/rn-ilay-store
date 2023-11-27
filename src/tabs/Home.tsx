import { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { Card } from 'react-native-elements';

import { supabase } from '~/lib/supabase';
import { bannerUrls } from '~/data/Banner';

import { logo, cdoLogo, pfLogo, bikoysLogo } from '~/constants/icons';
import { Product } from 'data/Product';
import BrandNav from 'components/BrandNav';
import ProductCard from '~/components/ProductCard';
import { COLORS, FONT, SIZES } from '~/constants/theme';
import { useProducts } from '../utils/productUtil';

const Home: React.FC = (/* { navigation }: { navigation: any } */) => {
  const [banners, setBanners] = useState();
  const { loading, products, hotdogProducts, tocinoProducts, nuggetsProducts } =
    useProducts();

  const handleCreateOrder = () => {
    console.log('create order pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={logo} style={styles.logo} />
        <Image
          source={{
            uri: 'https://atkwzqdyjmkqyusmnjqh.supabase.co/storage/v1/object/sign/ilay_store_images/banners/cdo_banner12.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbGF5X3N0b3JlX2ltYWdlcy9iYW5uZXJzL2Nkb19iYW5uZXIxMi5qcGciLCJpYXQiOjE3MDEwMTc0OTUsImV4cCI6MTczMjU1MzQ5NX0.s9gmxbr-ab4bHA5sjdD2d6IDE4DwPJl460fyCBvFg6M&t=2023-11-26T16%3A51%3A35.187Z'
          }}
          style={styles.banner}
        />
        <View style={styles.brandNavList}>
          <Pressable>
            <View style={styles.brandNav}>
              <Image source={cdoLogo} style={styles.brandNavLogo} />
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.brandNav}>
              <Image source={pfLogo} style={styles.brandNavLogo} />
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.brandNav}>
              <Image source={bikoysLogo} style={styles.brandNavLogo} />
            </View>
          </Pressable>
        </View>

        {loading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={styles.loadingIndicator}
          />
        ) : (
          // Display product sections if data has been loaded
          <View style={styles.productsSection}>
            <View style={styles.productsContainer}>
              <Text style={styles.category}>Hotdog</Text>
              <FlatList
                data={hotdogProducts}
                renderItem={({ item }) => (
                  <ProductCard
                    imageSource={item.image_url}
                    itemName={item.name}
                    itemWeight={item.weight}
                    itemPrice={item.price}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  columnGap: 10,
                  paddingRight: 30,
                  padding: 8
                }}
                horizontal
              />
            </View>
            <View style={styles.productsContainer}>
              <Text style={styles.category}>Tocino</Text>
              <FlatList
                data={tocinoProducts}
                renderItem={({ item }) => (
                  <ProductCard
                    imageSource={item.image_url}
                    itemName={item.name}
                    itemWeight={item.weight}
                    itemPrice={item.price}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  columnGap: 10,
                  paddingRight: 30,
                  padding: 8
                }}
                horizontal
              />
            </View>
            <View style={[styles.productsContainer, { paddingBottom: 80 }]}>
              <Text style={styles.category}>Nuggets</Text>
              <FlatList
                data={nuggetsProducts}
                renderItem={({ item }) => (
                  <ProductCard
                    imageSource={item.image_url}
                    itemName={item.name}
                    itemWeight={item.weight}
                    itemPrice={item.price}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  columnGap: 10,
                  paddingRight: 30,
                  padding: 8
                }}
                horizontal
              />
            </View>
          </View>
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCreateOrder}>
          <Text style={styles.buttonText}>Create Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 16
  },

  banner: {
    width: 280,
    height: 125,
    alignSelf: 'center',
    margin: 20,
    borderRadius: 10
  },
  logo: {
    width: 120,
    height: 20,
    marginLeft: 30
  },
  category: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginBottom: 10
  },
  brandNav: {
    padding: 20
  },
  brandNavLogo: {
    height: 50,
    width: 50
  },
  brandNavList: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  // Products section
  productsSection: {
    backgroundColor: COLORS.secondary
  },
  productsContainer: {
    marginLeft: 30,
    marginTop: 30
  },
  button: {
    padding: 14,
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    elevation: 5
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: SIZES.medium
  },
  loadingIndicator: {
    marginTop: 50
  }
});

export default Home;
