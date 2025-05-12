import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView,
} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {ImageRegister1} from '../../assets';
import {CustomButton, CustomTextInput, Space} from '../../components/small';

export default class Register1 extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.back}>
              <CustomButton
                icon="arrow-left"
                padding={7}
                onPress={() => this.props.navigation.goBack()}
                color="white"
              />
            </View>
            <View style={styles.ilustrasi}>
              <ImageRegister1 />
              <Space height={5} />
              <Text style={styles.title}>Daftar</Text>
              <Text style={styles.title}>Isi data diri Anda</Text>

              <View style={styles.wrapperCircle}>
                <View style={styles.circlePrimary}></View>
                <Space height={10} />
                <View style={styles.circleDisabled}></View>
              </View>
            </View>

            <View style={styles.card}>
              <CustomTextInput label="Name" />
              <CustomTextInput label="Email" />
              <CustomTextInput
                label="No. Handphone"
                keyboardType="number-pad"
              />
              <CustomTextInput label="Password" secureTextEntry={true} />

              <Space height={30} />
              <CustomButton
                title="Continue"
                type="text"
                padding={12}
                onPress={() => this.props.navigation.navigate('Register2')}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ilustrasi: {
    alignItems: 'center',
    marginTop: responsiveHeight(50),
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.light,
    color: colors.primary,
  },
  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 5,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
    width: responsiveWidth(11),
    height: responsiveHeight(11),
    borderRadius: 10,
  },
  circleDisabled: {
    backgroundColor: colors.border,
    width: responsiveWidth(11),
    height: responsiveHeight(11),
    borderRadius: 10,
  },
  card: {
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
    marginBottom: 20,
  },
  back: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 1,
    backgroundColor: colors.white,
  },
});
