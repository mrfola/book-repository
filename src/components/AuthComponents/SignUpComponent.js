import React from 'react';

class SignUpComponent extends React.Component
{
    render()
    {
        return (
            <div className="sign-up">
                    <h1>Sign Up</h1>
                <form>
                    <div className="form-group mid-form-size center">
                        <input className="form-input" type="text" name="name" required placeholder="Input your name" />
                        <input className="form-input" type="email" name="email" required placeholder="Input your email" />
                        <input className="form-input" type="password" name="password" required placeholder="Input your password" />
                        <button className="form-button" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpComponent;