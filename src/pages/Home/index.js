import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../utils';
import {
  BannerSlider,
  HeaderComponent,
  ListJersey,
  ListLiga,
} from '../../components/big';
import {dummyJerseys, dummyLigas} from '../../data';
import {Space} from '../../components/small';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ligas: dummyLigas,
      jerseys: dummyJerseys,
    };
  }

  render() {
    const {ligas, jerseys} = this.state;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent />
          <BannerSlider />
          <View style={styles.pilihLiga}>
            <Text style={styles.label}>Pilih Liga</Text>
            <ListLiga ligas={ligas} />
          </View>
          <View style={styles.pilihJersey}>
            <Text style={styles.label}>
              Pilih <Text style={styles.boldLabel}>Jersey</Text> yang Anda
              inginkan
            </Text>
            <ListJersey jerseys={jerseys} />
          </View>

          <Space height={100} />
        </ScrollView>
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
  pilihJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },

  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
