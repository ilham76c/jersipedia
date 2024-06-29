import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../../utils';
import {BannerSlider, HeaderComponent} from '../../components/big';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <HeaderComponent />
        <BannerSlider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});
