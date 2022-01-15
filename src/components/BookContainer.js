import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import BookCollection from "./BookCollection";
import '../css/style.css';

class BookContainer extends React.Component
{

    state = {
        books: []
    }

    formatQueryString(string)
    {
        let stringArray = string.split(" ");
        let formattedQueryString = stringArray.join("+");
        return formattedQueryString;
    }

    searchBooks(searchTerm)
    {
        // console.log(process.env.REACT_APP_GOOGLE_BOOKS_API_KEY );
        searchTerm = this.formatQueryString(searchTerm);
        //search for book from google books API
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`)
        .then(response => {
            if(response.ok)
            {
                return response.json()
            }
        }).then(data => {
            // console.log(data);
            this.setState(
            {
            books: data.items
            });
        }).catch(error => 
            {
            console.log(error);  
        });
        
        

            console.log(searchTerm);
    }
    

    render()
    {
        return(
            <div className="container-fluid">
                <Header/>
                <div className="container">
                    <SearchBar searchBooks={this.searchBooks.bind(this)}/>
                    <BookCollection books={this.state.books} />
                </div>
            </div>
        );        
    }
}

export default BookContainer;