import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {Book, useBookContext} from '../../providers/bookProvider';

//Supplier for BookProvider to pull Booklist Array
function BookListLR(){
  const { getBooks } = useBookContext();

  let latestBook = null;

  if (getBooks().length !== 0) {
    latestBook = getBooks()[getBooks().length - 1]; // Corrected index to get the latest book
  }

  // Returns a blank view for no items
  if (latestBook === null) {
    return <View></View>;
  }

  return (
    <Text key={latestBook.id} style={styles.sectionText}>
      Title: {latestBook.title}
      {'\n'}
      Author: {latestBook.author}
      {'\n'}
      Genre: {latestBook.genre}
      {'\n'}
      Total Pages: {latestBook.numberOfPages}
      {'\n'}
    </Text>
  );
}

const styles = StyleSheet.create({
  sectionText: {
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: '#FFF7E1',
    marginLeft: 2,
  },
});
export default BookListLR;
