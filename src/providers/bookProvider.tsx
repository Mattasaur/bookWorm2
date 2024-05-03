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
}

const BookContext = createContext<BookContextType>({
  books: [],
  addBook: () => {},
  removeBook: () => {},
});

const BookProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  const removeBook = (bookToRemove: Book) => {
    setBooks(books.filter(book => book.id !== bookToRemove.id));
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        removeBook,
      }}>
      {children}
    </BookContext.Provider>
  );
};

const useBookContext = (): BookContextType => useContext(BookContext);

export {BookProvider, useBookContext};
