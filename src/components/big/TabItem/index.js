import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHome,
  IconHomeActive,
  IconJersey,
  IconJerseyActive,
  IconProfile,
  IconProfileActive,
} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }

    if (label === 'Jersey') {
      return isFocused ? <IconJerseyActive /> : <IconJersey />;
    }

    if (label === 'Profile') {
      return isFocused ? <IconProfileActive /> : <IconProfile />;
    }

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 4,
  }),
});
