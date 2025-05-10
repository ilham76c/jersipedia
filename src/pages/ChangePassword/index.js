import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, responsiveHeight} from '../../utils';
import {CustomTextInput} from '../../components/small';
import Button from '../../components/small/Button';

export default class ChangePassword extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <View>
          <CustomTextInput
            label="Password"
            fontSize={15}
            secureTextEntry={true}
          />
          <CustomTextInput
            label="New Password"
            fontSize={15}
            secureTextEntry={true}
          />
          <CustomTextInput
            label="Retype New Password"
            fontSize={15}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.submit}>
          <Button
            title="Submit"
            type="text"
            padding={responsiveHeight(15)}
            fontSize={18}
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
    paddingHorizontal: 30,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  submit: {
    marginVertical: 30,
  },
});
