import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {Book, useBookContext} from '../../providers/bookProvider';


//Storage function to keep books stored as objects
function BookList() {

  const {getBooks} = useBookContext();

  //map function to put objects into a list
  const bookList = getBooks().map(book => (
    <Text key={book.id} style={styles.sectionText}>
      Title: {book.title}
      {'\n'}
      Author: {book.author}
      {'\n'}
      Genre: {book.genre}
      {'\n'}
      Total Pages: {book.numberOfPages}
      {'\n'}
    </Text>
  ));

  //This should return book list to homescreen to view
  return bookList;
}
const styles = StyleSheet.create({
  sectionText: {
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: '#FFF7E1',
    marginLeft: 2,
  },
});
export default BookList;
