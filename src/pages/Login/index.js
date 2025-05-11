import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Ilustrasi, Logo} from '../../assets';
import {colors, fonts, responsiveHeight} from '../../utils';
import {CustomButton, CustomTextInput, Space} from '../../components/small';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.cardLogin}>
          <CustomTextInput label="Email" fontSize={15} />
          <CustomTextInput
            label="Password"
            fontSize={15}
            secureTextEntry={true}
          />
          <Space height={25} />
          <CustomButton type="text" padding={10} fontSize={15} title="Login" />
        </View>

        <View style={styles.register}>
          <Text style={styles.textBlue}>Belum punya akun?</Text>
          <Text style={styles.textBlue}>Klik untuk daftar</Text>
        </View>
        <View style={styles.ilustrasi}>
          <Ilustrasi />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ilustrasi: {
    position: 'absolute',
    bottom: 0,
    right: -100,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(70),
  },
  cardLogin: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  register: {
    alignItems: 'center',
    marginTop: 10,
  },
  textBlue: {
    fontSize: 17,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
  },
});
