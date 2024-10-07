import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconCart} from '../../../assets';
import {colors} from '../../../utils';
import Button from '../Button';

const ButtonCart = props => {
  const {icon, totalCarts, padding, type} = props;
  const Icon = () => {
    return icon === 'cart' ? <IconCart /> : <IconCart />;
  };

  if (type === 'text') {
    return <Button {...props} />;
  }

  return (
    <TouchableOpacity style={styles.container(padding)}>
      <Icon />
      {totalCarts && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{totalCarts}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonCart;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.white,
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
});
