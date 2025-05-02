import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardKeranjang} from '../../small';

const ListKeranjang = ({keranjangs}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {keranjangs.map(keranjang => (
          <CardKeranjang key={keranjang.id} keranjang={keranjang} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ListKeranjang;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
