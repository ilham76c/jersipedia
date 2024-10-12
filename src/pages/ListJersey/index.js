import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../utils';
import {
  BannerSlider,
  HeaderComponent,
  ListJerseys,
  ListLiga,
} from '../../components/big';
import {dummyJerseys, dummyLigas} from '../../data';
import {CustomButton, Space} from '../../components/small';

export default class ListJersey extends Component {
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
        <HeaderComponent />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.pilihLiga}>
            <ListLiga ligas={ligas} />
          </View>
          <View style={styles.pilihJersey}>
            <Text style={styles.label}>
              Pilih <Text style={styles.boldLabel}>Jersey</Text> yang Anda
              inginkan
            </Text>
            <ListJerseys jerseys={jerseys} />

            <CustomButton title="Lihat Semua" type="text" padding={7} />
          </View>

          <Space height={100} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  container: {
    marginTop: -30,
  },
  pilihLiga: {
    marginHorizontal: 30,
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
