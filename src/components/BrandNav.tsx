import React from 'react';
import { Pressable, View, Image, StyleSheet } from 'react-native';

const BrandNav = (logoSource: any) => {
  return (
    <Pressable>
      <View style={styles.brandNav}>
        <Image source={logoSource} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  brandNav: {
    padding: 20
  }
});

export default BrandNav;
