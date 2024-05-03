import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {Book, useBookContext} from '../../providers/bookProvider';

//Storage function to keep books stored as objects
function Stats() {
  const {getBooks} = useBookContext();
  let sumOfBookPage = 0;
  let numOfBook = getBooks().length;

  // Gets sum of pages
  getBooks().forEach(book => {
    sumOfBookPage += book.numberOfPages;
  });

  // calculates Avg pages
  const avgPages = sumOfBookPage / numOfBook;

  //map function to put objects into a list
  //This should return book list to homescreen to view
  return (
    <View>
      <Text style={styles.sectionHeader}>Average Stats</Text>
      <Text style={styles.sectionText}>Total Pages Read: {sumOfBookPage}</Text>
      {/* Average pages  */}
      <Text style={styles.sectionText}>Average Pages Read: {avgPages}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionText: {
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: '#FFF7E1',
    marginLeft: 2,
  },
  sectionHeader: {
    backgroundColor: '#FFF7E1',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    paddingBottom: 8,
    marginLeft: 2,
  },
});
export default Stats;
