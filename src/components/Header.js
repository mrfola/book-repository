import React from "react";

class Header extends React.Component
{
    render()
    {
        return (
            <div className="header">
                <h1>Book Search</h1>

                <nav class="navigation-bar">
                    <ul class="row navigation-links">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;