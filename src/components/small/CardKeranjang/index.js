import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight} from '../../../utils';
import {IconDelete} from '../../../assets';
import Space from '../Space';

const CardKeranjang = ({keranjang}) => {
  return (
    <View style={styles.container}>
      <Image source={keranjang.product.gambar[0]} style={styles.gambar} />
      <View style={styles.desc}>
        <Text style={styles.nama}>{keranjang.product.nama}</Text>
        <Text style={styles.text}>
          {keranjang.product.harga.toLocaleString('en-US', {
            style: 'currency',
            currency: 'IDR',
          })}
        </Text>

        <Space height={14} />

        <Text style={styles.textBold}>Jumlah: {keranjang.jumlahPesan}</Text>
        <Text style={styles.textBold}>Ukuran: {keranjang.ukuran}</Text>
        <Text style={styles.textBold}>
          Total Harga:{' '}
          {keranjang.totalHarga.toLocaleString('en-US', {
            style: 'currency',
            currency: 'IDR',
          })}
        </Text>
        <Text style={styles.textBold}>Keterangan:</Text>
        <Text style={styles.textBold}>{keranjang.keterangan}</Text>
      </View>
      <View style={styles.hapus}>
        <IconDelete />
      </View>
    </View>
  );
};

export default CardKeranjang;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 30,
    padding: responsiveHeight(15),
    borderRadius: 10,
    alignItems: 'start',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  gambar: {
    width: responsiveHeight(88),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  hapus: {
    flex: 1,
    alignItems: 'flex-end',
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: 13,
    textTransform: 'capitalize',
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
  },
  textBold: {
    fontFamily: fonts.primary.bold,
    fontSize: 11,
  },
});
