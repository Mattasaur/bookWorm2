/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, createContext} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import {SelectList} from 'react-native-dropdown-select-list';
import {Book, useBookContext} from '../providers/bookProvider';

export const bookContext = createContext();

export default function AddBook({navigation, route}): React.JSX.Element {
  const [id, setID] = useState(0);
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [selected, setSelected] = useState('');
  const [pageNo, setPageNo] = useState(0);
  const genres: string[] = [
    'Action and adventure',
    'Alternate history',
    'Anthology',
    'Children',
    'Classic',
    'Comic book',
    'Coming-of-age',
    'Crime',
    'Drama',
    'Fantasy',
    'Graphic novel',
    'Historical fiction',
    'Romance',
    'Horror',
    'Science fiction',
    'Nonfiction',
    'Young adult',
    'Poetry',
    'Short story',
  ];

  const {addBook} = useBookContext();

  // This const will check errors in submission
  //const validateForm = ()=>{
  //let errors = {};
  //if (!bookName) errors.bookName="Book Name must be entered!";
  //setErrors(errors);
  //return Object.keys(errors).length===0;
  //};

  //this const will handle submition of fields
  const handleSubmit = e => {
    // if (validateForm()){
    if (id < 3) {
      setID(i => i + 1);
      console.log(
        'Book ' + id + ' Submitted',
        bookName,
        bookAuthor,
        selected,
        pageNo,
      );
      const newBook: Book = {
        id: id,
        title: bookName,
        author: bookAuthor,
        genre: selected,
        numberOfPages: pageNo,
      };

      addBook(newBook);
    } else console.log('Max Count Reached!');
    //setErrors({});
    //}
  };

  const backgroundStyle = {
    backgroundColor: '#ECE1C1',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.sectionHeader}>
          Please enter the details of last book read
        </Text>
        <View style={styles.sectionText}>
          <Text>Title:</Text>
          <TextInput
            style={styles.textInput}
            value={bookName}
            onChangeText={setBookName}
          />
          <Text>Author:</Text>
          <TextInput
            style={styles.textInput}
            value={bookAuthor}
            onChangeText={setBookAuthor}
          />
          <Text>Genre:</Text>
          <SelectList
            boxStyles={styles.textInput}
            dropdownStyles={styles.textInput}
            setSelected={setSelected}
            data={genres}
          />
          <Text>Number of Pages:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setPageNo}
            keyboardType="numeric"
          />
        </View>
        <Button title="+" color="#784F00" onPress={e => handleSubmit(e)} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    flex: 1,
    padding: 24,
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor: '#FFF7E1',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionText: {
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: '#FFF7E1',
    padding: 10,
  },
  buttonHeader: {
    fontWeight: '700',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#ECE1C1',
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
