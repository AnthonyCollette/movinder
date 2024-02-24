import React from 'react';

const Login = () => {
    return (
        <main className='d-flex flex-column container'>
            <h1>Login</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='username'>Nom d'utilisateur</label>
                    <input type="text" name="username" />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type="password" name="password" />
                </div>
                <input type='submit' value="Se connecter"></input>
            </form>
        </main>
    );
};

export default Login;