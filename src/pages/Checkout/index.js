import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {colors, fonts, responsiveHeight} from '../../utils';
import {CardAddress, CustomButton, Select, Space} from '../../components/small';
import {dummyPesanans, dummyProfile} from '../../data';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: dummyProfile,
      pesanan: dummyPesanans[0],
      ekspedisi: [],
    };
  }
  render() {
    const {profile, pesanan, ekspedisi} = this.state;
    return (
      <View style={styles.pages}>
        <View style={styles.content}>
          <Text style={styles.textBold}>Apakah alamat Anda sudah benar?</Text>
          <CardAddress profile={profile} />

          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga: </Text>
            <Text style={styles.textBold}>
              {pesanan.totalHarga.toLocaleString('en-US', {
                style: 'currency',
                currency: 'IDR',
              })}
            </Text>
          </View>

          <Select label="Pilih Ekspedisi" datas={ekspedisi} />

          <Space height={10} />
          <Text style={styles.textBold}>Biaya Ongkir :</Text>
          <View style={styles.ongkir}>
            <Text style={styles.text}>Berat: {pesanan.berat} Kg</Text>
            <Text style={styles.textBold}>
              {(15000).toLocaleString('en-US', {
                style: 'currency',
                currency: 'IDR',
              })}
            </Text>
          </View>
          <View style={styles.ongkir}>
            <Text style={styles.text}>Estimasi :</Text>
            <Text style={styles.textBold}>2-3 Hari</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga: </Text>
            <Text style={styles.textBold}>
              {(pesanan.totalHarga + 15000).toLocaleString('en-US', {
                style: 'currency',
                currency: 'IDR',
              })}
            </Text>
          </View>
          <CustomButton
            type="text"
            title="Bayar"
            padding={responsiveHeight(15)}
            fontSize={18}
            onPress={() => this.props.navigation.navigate('Checkout')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  textBold: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  totalHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  ongkir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,

    elevation: 11,
    paddingBottom: 30,
  },
});
