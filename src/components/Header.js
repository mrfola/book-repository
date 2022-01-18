import React from "react";

class Header extends React.Component
{
    render()
    {
        return (
            <div className="header">
                <a href="/"><h1>Book Search</h1></a>

                <nav className="navigation-bar">
                    <ul className="row navigation-links">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/sign-up">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;