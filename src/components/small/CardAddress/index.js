import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function CardAddress({profile}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alamat: </Text>
      <Text style={styles.address}>{profile.address}</Text>
      <Text style={styles.address}>Kota: {profile.city}</Text>
      <Text style={styles.address}>Provinsi: {profile.province}</Text>
      <TouchableOpacity>
        <Text style={styles.changeAddress}>Ubah Alamat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    marginBottom: 5,
  },
  address: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
  },
  changeAddress: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    color: colors.primary,
    textAlign: 'right',
  },
});
