import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveWidth} from '../../../utils';
import {CustomButton} from '../../small';

const CardJersey = ({jersey}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image source={jersey.gambar[0]} style={styles.gambar} />
        <Text style={styles.text}>{jersey.nama}</Text>
      </TouchableOpacity>

      <CustomButton type="text" title="Detail" padding={7} />
    </View>
  );
};

export default CardJersey;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  card: {
    backgroundColor: colors.yellow,
    width: responsiveWidth(150),
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  gambar: {
    width: 124,
    height: 124,
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 13,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
