import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors, fonts, responsiveHeight} from '../../../utils';
import {IconSearch} from '../../../assets';
import {CustomButton, Space} from '../../small';

export default class HeaderComponent extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          {/* search bar */}
          <View style={styles.searchSection}>
            <IconSearch />
            <TextInput placeholder="Cari Jersey..." style={styles.input} />
          </View>
          <Space height={10} />
          <CustomButton
            icon="cart"
            totalCarts={2}
            padding={10}
            onPress={() => navigation.navigate('Keranjang')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingLeft: 10,
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
  },
});
