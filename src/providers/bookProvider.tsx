import React, {createContext, useState, useContext} from 'react';

export interface Book {
  id: number;
  title: string;
  author: string;
  numberOfPages: number;
  genre: string;
}

interface BookContextType {
  books: Book[];
  addBook: (book: Book) => void;
  removeBook: (book: Book) => void;
  getBooks: () => Book[];
}

const BookContext = createContext<BookContextType>({
  books: [],
  addBook: () => {},
  removeBook: () => {},
  getBooks: () => [],
});

const BookProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (newBook: Book) => {
    newBook.id = books.length+1
    setBooks([...books, newBook]);
    console.log(
      'Book ' + newBook.id + ' Submitted',
      newBook.title,
      newBook.author,
      newBook.genre,
      newBook.numberOfPages,
    );
  };

  const removeBook = (bookToRemove: Book) => {
    setBooks(books.filter(book => book.id !== bookToRemove.id));
  };

  const getBooks =()=>{
    return books;
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        removeBook,
        getBooks,
      }}>
      {children}
    </BookContext.Provider>
  );
};

const useBookContext = (): BookContextType => useContext(BookContext);

export {BookProvider, useBookContext};
