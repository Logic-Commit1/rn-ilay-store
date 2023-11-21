/* import { IonContent, IonPage } from "@ionic/react";
import Banner from "src/components/Banner";
import bannerImage from "src/assets/Banner.jpg";
import BrandNavList from "./BrandNavList/BrandNavList";
import Logo from "src/components/Logo";
import Button from "src/components/Button";
import ProductCategory from "./ProductCategory/ProductCategory";
import { productsData } from "src/data/ProductsData";
 */

import { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Card } from 'react-native-elements';
import { supabase } from '../lib/supabase';
import { bannerUrls } from '../data/Banner';
import logo from '../assets/nav/logo.png';
import cdoLogo from '../assets/brand-logo/cdo-logo.png';
import pfLogo from '../assets/brand-logo/purefoods-logo.png';
import bikoysLogo from "../assets/brand-logo/bikoy's-logo.png";

import { Product } from 'src/data/Product';
import BrandNav from '../components/BrandNav';
import ProductCard from '../components/ProductCard';

const Home: React.FC = (/* { navigation }: { navigation: any } */) => {
  const [banners, setBanners] = useState();
  const [products, setProducts] = useState<Product[]>();
  const [hotdogProducts, setHotdogProducts] = useState<Product[] | null>(null);
  const [tocinoProducts, setTocinoProducts] = useState<Product[] | null>(null);
  const [nuggetsProducts, setNuggetsProducts] = useState<Product[] | null>(
    null
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error(error);
      }
      if (data) {
        setProducts(data);
        const hotdogItems: Product[] = data.filter(
          (item) => item.category.toLowerCase() === 'hotdog'
        );
        const tocinoItems: Product[] = data.filter(
          (item) => item.category.toLowerCase() === 'tocino'
        );
        const nuggetsItems: Product[] = data.filter(
          (item) => item.category.toLowerCase() === 'nuggets'
        );
        setHotdogProducts(hotdogItems);
        setTocinoProducts(tocinoItems);
        setNuggetsProducts(nuggetsItems);
      } else {
        console.log('data is null');
      }
    };
    fetchProducts();
  }, []);

  const handleCreateOrder = () => {
    console.log('create order pressed');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={logo} style={styles.logo} />
        <Image
          source={{
            uri: 'https://atkwzqdyjmkqyusmnjqh.supabase.co/storage/v1/object/sign/ilay_store_images/banners/cdo_banner12.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbGF5X3N0b3JlX2ltYWdlcy9iYW5uZXJzL2Nkb19iYW5uZXIxMi5qcGciLCJpYXQiOjE2OTk5ODI3ODQsImV4cCI6MTcwMDU4NzU4NH0.XbJkSfBXbaAP2nZf2Za9gc0oMQVO2TpAG4PZDF0Q7fU&t=2023-11-14T17%3A26%3A24.785Z'
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
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 70,
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
    backgroundColor: '#FFECEC'
  },
  productsContainer: {
    marginLeft: 30,
    marginTop: 30
  },
  button: {
    padding: 14,
    backgroundColor: '#F65156',
    borderRadius: 10,
    elevation: 5
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 14
  }
});

export default Home;
