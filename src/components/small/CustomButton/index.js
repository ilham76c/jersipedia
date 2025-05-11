import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconBack,
  IconCart,
  IconKeranjangPutih,
  IconArrowRight,
} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Button from '../Button';

const ButtonCart = props => {
  const {icon, label, totalCarts, padding, type, onPress, fontSize} = props;
  const Icon = () => {
    if (icon === 'cart') {
      return <IconCart />;
    } else if (icon === 'arrow-left') {
      return <IconBack />;
    } else if (icon === 'arrow-right') {
      return <IconArrowRight />;
    } else if (icon === 'keranjang-putih') {
      return <IconKeranjangPutih />;
    }
    return <IconCart />;
  };

  if (type === 'text') {
    return <Button {...props} onPress={onPress} />;
  }

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      {totalCarts && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{totalCarts}</Text>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
        }}>
        <Icon />
        <Text style={styles.text(fontSize)}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCart;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.primary,
    padding: padding,
    borderRadius: 5,
  }),
  notif: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 3,
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
  textNotif: {
    fontSize: 8,
    color: colors.white,
  },
  text: fontSize => ({
    color: colors.white,
    fontSize: fontSize ? fontSize : 15,
    fontFamily: fonts.primary.bold,
  }),
});
