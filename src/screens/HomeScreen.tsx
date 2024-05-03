import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BookListLR from './Components/bookListLR';
import Stats from './Components/stats';

export default function HomeScreen({navigation}) {
  const backgroundStyle = {
    backgroundColor: '#ECE1C1',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Button
            title="History"
            color="#784F00"
            onPress={() => navigation.navigate('History')}
          />
          {/* Button to check history */}
          <Button
            title="Genre"
            color="#784F00"
            onPress={() => navigation.navigate('Genre')}
          />
          {/* Button to sort by Genre */}
        </View>
        <View>
          {/* Stats section, will need to do research on this */}
          <Stats />
        </View>
        <View>
          {/* Last read history, will need array */}
          <Text style={styles.sectionHeader}>Last Read History</Text>
          <BookListLR />
        </View>
        {/* Button to add new book */}
        <Button
          title="+"
          color="#784F00"
          onPress={() => navigation.navigate('Add Book')}
        />
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
    paddingBottom: 8,
    marginLeft: 2,
  },
  sectionText: {
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: '#FFF7E1',
    marginLeft: 2,
  },
  buttonHeader: {
    fontWeight: '700',
  },
});
