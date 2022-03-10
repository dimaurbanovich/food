import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text> Results: {results.length}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <Text> {item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
