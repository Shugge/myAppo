import React from "react"; 
import ReactDOM from 'react-dom/client';

import './index.css';


const books = [
    {
        title: 'My Name Is Barbra',
        author: 'Barbra Streisand',
        img: 'https://images-na.ssl-images-amazon.com/images/I/61CrGbiVSnL._AC_SX184_.jpg',
        id: 1
    },
    {
        title: 'The Berry Pickers: A Novel',
        author: 'Amanda Peters',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51I03k0boYL._AC_SX184_.jpg',
        id: 2
    }
];

const BookList = () => {
    return (        
        <section className="booklist">
            {
                books.map((book) => {
                    return (
                        <Book {...book} key={book.id} />
                    );
                })
            }
        </section>
    );
}

const Book = (props) => {
    console.log(props);
    const {img, title, author} = props;
    return (
        <article className="book">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);