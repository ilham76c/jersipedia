import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts, responsiveHeight} from '../../../utils';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, data, width, height, fontSize}) => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label}: </Text>
      <View style={styles.wrapperPicker}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={styles.picker(width, height, fontSize)}>
          <Picker.Item label="-- Pilih --" value="" />
          {data &&
            data.map((item, index) => {
              return (
                <Picker.Item
                  label={item.label}
                  value={item.value}
                  key={index}
                />
              );
            })}
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
  }),
  picker: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height ? height : responsiveHeight(60),
    textAlign: 'center',
    textAlignVertical: 'center',
  }),
  wrapperPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
  },
});
