import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {CardLiga} from '../../small';

export default function ListLiga({ligas}) {
  return (
    <View style={styles.container}>
      {ligas.map(liga => {
        return <CardLiga liga={liga} key={liga.id} style={styles.logo} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
