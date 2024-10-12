import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {dummyProfile} from '../../data';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils/constant';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
    };
  }
  render() {
    const {profile} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={profile.avatar} style={styles.photo} />
          <View style={styles.profile}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.description}>Phone: {profile.phone}</Text>
            <Text style={styles.description}>
              {profile.address}, {profile.city}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(680),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  photo: {
    width: responsiveWidth(150),
    height: responsiveHeight(150),
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: -responsiveWidth(75),
  },
  profile: {
    marginTop: 10,
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24, heightMobileUI),
  },
  description: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(18, heightMobileUI),
  },
});
