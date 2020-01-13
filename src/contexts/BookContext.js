import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "noel and twins", id: 1},
        {title: "Lord of the rings", id: 2},
        {title: "jumping gun", id: 3},
        {title: "Jubilee night", id: 4}
    ]);

    return ( 
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;