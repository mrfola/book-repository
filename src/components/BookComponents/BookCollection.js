import React from "react";
import BookModule from "./BookModule";

class BookCollection extends React.Component
{

    render()
    {
        return (
            <div className="book-collection">
                 {this.props.books.map(function(book)
                {
                    const {id} = book;
                    // let thumbnail;

                    // if (typeof(book.volumeInfo.imageLinks.thumbnail) !== 'undefined')
                    // {
                    //     thumbnail = book.volumeInfo.imageLinks.thumbnail;

                    // } else
                    // {
                    //     thumbnail = 'https://via.placeholder.com/200x300.png?text=Image+Not+Found';
                    // }
                    const {title} = book.volumeInfo;
                    const {subtitle} = book.volumeInfo;
                    const {infoLink} = book.volumeInfo;
                    const {pageCount} = book.volumeInfo;
                    const {authors} = book.volumeInfo;

                    return (
                        <BookModule key={id}
                        bookImageUrl = "#"
                        bookTitle= {title}
                        bookDescription = {subtitle}
                        bookLink = {infoLink}
                        pageCount = {pageCount}
                        authors = {authors}//this is an array
                        />
                    )
                })}

            </div>
        )
    }
}

export default BookCollection;