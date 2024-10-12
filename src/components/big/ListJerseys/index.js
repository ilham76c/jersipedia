import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CardJersey} from '../../small';

const ListJerseys = ({jerseys}) => {
  return (
    <View style={styles.container}>
      {jerseys.map(jersey => {
        return <CardJersey key={jersey.id} jersey={jersey} />;
      })}
    </View>
  );
};

export default ListJerseys;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
