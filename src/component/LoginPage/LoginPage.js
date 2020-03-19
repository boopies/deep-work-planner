import React, {Component} from 'react';
import ApiContext from '../../ApiContext';
import {Link} from 'react-router-dom';

export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        }
    };

    static contextType = ApiContext;

    state = {
        error: null
    };

    render() {
        const {error} = this.state;
        return (
            <>
                <header className="login__header">
                    <h1 className="login__heading">
                        Log In
                    </h1>
                </header>
                <main className="login__main">
                    <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div className='loginform__username'>
                            <label className='loginform__user-title'>
                                Username
                            </label>
                            <input 
                            required
                            className='loginform__user-input' 
                            name='username' 
                            id='LoginForm__username' />
                        </div>
                        <div className='loginform__password'>
                            <label className='loginform__user-title'>
                                Password
                            </label>
                            <input
                                required
                                className='loginform__user-input'
                                name='password'
                                type='password'
                                id='LoginForm__password' />
                        </div>
                        <div className='gotoRegister'>
                            <h3>Not a member?
                            <Link
                            to='/register'>
                            {' '}Register here.
                            </Link></h3>
                        </div>
                        <div className='loginButtons'>
                        <button className='button__violet' 
                        type='button'
                        onClick={() => this.props.history.push('/mypage')}>
                        Login
                        </button>
                        <button 
                            className='button__red'
                            type='button'
                            onClick={() => this.props.history.push('/')}>
                            Cancel
                        </button>
                        </div>
                    </form>
                </main>
            </>
        )
    };
}