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
import {connect} from 'react-redux';
import {getUser} from '../../actions/UserAction';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ligas: dummyLigas,
      jerseys: dummyJerseys,
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUser());
  }

  render() {
    const {ligas, jerseys} = this.state;
    const {navigation, dataUser} = this.props;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation} />
          <BannerSlider />
          <View style={styles.pilihLiga}>
            <Text style={styles.label}>Pilih Liga {dataUser.nama}</Text>
            <ListLiga ligas={ligas} />
          </View>
          <View style={styles.pilihJersey}>
            <Text style={styles.label}>
              Pilih <Text style={styles.boldLabel}>Jersey</Text> yang Anda
              inginkan
            </Text>
            <ListJerseys jerseys={jerseys} navigation={navigation} />

            <CustomButton title="Lihat Semua" type="text" padding={7} />
          </View>

          <Space height={100} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  dataUser: state.userReducer.dataUser,
});

export default connect(mapStateToProps, null)(Home);

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
