import React from 'react';

class LoginComponent extends React.Component
{
    render()
    {
        return (
            <div className="login">
                <h1>Login</h1>
                <form>
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