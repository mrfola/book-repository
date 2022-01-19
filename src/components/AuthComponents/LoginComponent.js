import React from 'react';

class LoginComponent extends React.Component
{

    constructor(props) 
    {
        super(props);

        this.state = 
        {
            message: {}
        }

        console.log(localStorage.getItem("isLoggedIn"), localStorage.getItem("email"))

    }    
        
    //default array of users since we have no database yet
    users = 
    [
        {
            email : 'johndoe@gmail.com',
            password: 'password'
        },
        {
            email : 'joannadoe@gmail.com',
            password: 'password'
        }
    ]

    login(event)
    {
        event.preventDefault();

        //check if user credentials match existing users
        let email = event.target[0].value;
        let password = event.target[1].value;

        email = email.toLowerCase(); //make email case INSENSITIVE

        let userCredentials = {email, password}

        let isUser = this.users.filter((user)=> {
        
            return (user.email == userCredentials.email) && (user.password == userCredentials.password);
        });

        if(isUser.length == 1)
        {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("email", email);
            console.log(localStorage.getItem("isLoggedIn"), localStorage.getItem("email"))

        }else
        {
            this.setState({message: {
                type: "error", 
                message: "Wrong Email or Password"
            }});
        }
    }
    

    render()
    {
        return (
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.login.bind(this)}>
                    <div className="form-group mid-form-size center">
                        <input className="form-input" type="email" name="email" required placeholder="Kindly input your email" />
                        <input className="form-input" type="password" name="password" required placeholder="Kindly input your password" />
                        <button className="form-button" type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }       
}

export default LoginComponent;