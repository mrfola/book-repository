import React from "react";

class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.searchBooks = this.searchBooks.bind(this);
    }

    searchBooks(e)
    {
        e.preventDefault();
        //pass search query to parent component
        this.props.searchBooks(e.target[0].value);
    }

    render()
    {
        return (
            <div className="search-bar">
                <form className="row" onSubmit={this.searchBooks}>
                    <input className="form-input" type="text"   placeholder="Search any book" required/>
                    <button type="submit" className="btn btn-dark search-button">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;