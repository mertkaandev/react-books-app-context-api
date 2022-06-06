import React from "react";
import Book from "./Book.js";
import "./bookList.css";

import {BookContext} from "../contexts/BookContext.js";

class BookList extends React.Component {

    render(){
        return (
           <BookContext.Consumer>
               {value => {
                   return (
                     <section className="page-section bg-light" id="portfolio">

                     <div className="container">
       

                       <div className="text-center">
                           <h2 className="section-heading text-uppercase">booksfolio</h2>
                           <h3 className="section-subheading text-muted">my books.</h3>
                       </div>
   
                       <div className="row">
                            {value.books.map((book,i)=>
                             {return <Book book={book} key={i}/>}
                            )}
                       </div>
       
                     </div>
                    
                     </section>
                   )
               }}
           </BookContext.Consumer>
        )
    }
}

export default BookList;