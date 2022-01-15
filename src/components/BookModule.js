import React from "react";

class BookModule extends React.Component
{
    render()
    {
        return (
            <div className="book-module">
                <div className="book-image">
                    <img src={this.props.bookImageUrl} alt="Book cover" />
                </div>
                <div className="book-body">
                    <h2>{this.props.bookTitle}</h2>
                    <p>{this.props.bookDescription}</p>
                </div>
                <div className="book-footer">
                    <a href={this.props.bookLink}><button className="btn">View</button></a>
                </div>
            </div>
        );
    }
}

export default BookModule;