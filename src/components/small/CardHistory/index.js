import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import Space from '../Space';

const CardHistory = ({pesanan}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tanggal}>{pesanan.tanggalPemesanan}</Text>
      {pesanan.pesanans.map((history, index) => (
        <View key={index} style={styles.history}>
          <Text style={styles.textBold}>{index + 1}.</Text>
          <Image source={history.product.gambar[0]} style={styles.jersey} />
          <View style={styles.desc}>
            <Text style={styles.name}>{history.product.nama}</Text>
            <Text style={styles.price}>
              {history.product.harga.toLocaleString('en-US', {
                style: 'currency',
                currency: 'IDR',
              })}
            </Text>

            <Space height={10} />
            <Text style={styles.textBold}>Pesan: {history.jumlahPesan}</Text>
            <Text style={styles.textBold}>
              Total Harga:{' '}
              {history.totalHarga.toLocaleString('en-US', {
                style: 'currency',
                currency: 'IDR',
              })}
            </Text>
          </View>
        </View>
      ))}

      <Space height={10} />

      <View style={styles.footer}>
        <View style={styles.label}>
          <Text style={styles.textBlue}>Status :</Text>
          <Text style={styles.textBlue}>Ongkir (2-3 hari) :</Text>
          <Text style={styles.textBlue}>Total Harga :</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.textBlue}>{pesanan.status}</Text>
          <Text style={styles.textBlue}>Rp. 15.000</Text>
          <Text style={styles.textBlue}>
            Rp{' '}
            {pesanan.totalHarga.toLocaleString('en-US', {
              style: 'currency',
              currency: 'IDR',
            })}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardHistory;

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
    marginBottom: 20,
  },
  history: {
    flexDirection: 'row',
    marginTop: 10,
  },
  jersey: {
    width: responsiveWidth(66),
    height: responsiveHeight(66),
    resizeMode: 'contain',
  },
  tanggal: {
    fontSize: 14,
    fontFamily: fonts.primary.bold,
  },
  textBold: {
    fontSize: 11,
    fontFamily: fonts.primary.bold,
  },
  desc: {
    marginLeft: responsiveWidth(7),
  },
  name: {
    fontSize: 13,
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
  },
  price: {
    fontSize: 11,
    fontFamily: fonts.primary.regular,
  },
  footer: {
    flexDirection: 'row',
  },
  label: {
    flex: 1,
  },
  textBlue: {
    fontSize: 14,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
    textTransform: 'uppercase',
    textAlign: 'right',
  },
});
