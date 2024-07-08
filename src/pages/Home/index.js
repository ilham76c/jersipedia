import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../utils';
import {BannerSlider, HeaderComponent, ListLiga} from '../../components/big';
import {dummyLigas} from '../../data';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ligas: dummyLigas,
    };
  }

  render() {
    const {ligas} = this.state;
    return (
      <View style={styles.page}>
        <HeaderComponent />
        <BannerSlider />
        <View style={styles.pilihLiga}>
          <Text style={styles.label}>Pilih Liga</Text>
          <ListLiga ligas={ligas} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  pilihLiga: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
});
