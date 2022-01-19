import React from "react";

class Header extends React.Component
{
    render()
    {       
        //if user is logged in
        if(localStorage.getItem("isLoggedIn") == true)
        {
            return(
            <div className="header">
                <a href="/"><h1>Book Search</h1></a>

                <nav className="navigation-bar">
                    <ul className="row navigation-links">
                        <li><a href='/login'>Login</a></li>
                        <li><a href='/sign-up'>Sign Up</a></li>
                    </ul>
                </nav>
            </div>
            );

        }else
        {
            return(
            <div className="header">
                <a href="/"><h1>Book Search</h1></a>

                <nav className="navigation-bar">
                    <ul className="row navigation-links">
                        <li><a href='/dashboard'>Dashboard</a></li>
                        <li><a href='/logout'>Logout</a></li>
                    </ul>
                </nav>
            </div>
            );
        }
    }
}

export default Header;