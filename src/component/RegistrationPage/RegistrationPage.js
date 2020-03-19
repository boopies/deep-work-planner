import React from 'react'
import {Link} from 'react-router-dom'

export default class RegistrationPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  constructor(props) {
    super(props);
    this.state = {
  }
};

  render() {
    return (
      <>
        <header className="registration__header">
            <h1 className="registration__heading">
                Register
            </h1>
        </header>
        <main className="registration__main">
            <form
              className='RegistrationForm'
            >
              <div role='alert'>
              </div>

              <div className='registration_username'>
                <label htmlFor='RegistrationForm__username'>
                  Username
                </label>
                <input
                className='registrationform__user-input'
                  name='username'
                  type='text'
                  id='RegistrationForm__username'>
                </input>
              </div>

              <div className='registration_full_name'>
                <label htmlFor='RegistrationForm__full_name'>
                  Full Name
                </label>
                <input
                className='registrationform__user-input'
                  name='full_name'
                  type='text'
                  id='RegistrationForm__full_name'>
                </input>
              </div>

              <div className='registration_email'>
                <label htmlFor='RegistrationForm__email'>
                  email
                </label>
                <input
                  className='registrationform__user-input'
                  name='email'
                  type='email'
                  id='RegistrationForm__email'>
                </input>
              </div>

              <div className='registration_password'>
                <label htmlFor='RegistrationForm__password'>
                  Password
                </label>
                <input
                  className='registrationform__password-input'
                  name='password'
                  type='password'
                  id='RegistrationForm__password'>
                </input>
              </div>
              <div className='registration_password'>
                <label htmlFor='RegistrationForm__password'>
                  Reenter Password
                </label>
                <input
                  className='registrationform__password_check'
                  name='password_check'
                  type='password'
                  id='password_check'>
                </input>
              </div>
              <div className='gotoLogin'>
                  <h3>Already a member?
                  <Link
                  to='/login'>
                  {' '}Log in here.
                </Link></h3>
              </div>

              <div className='registration_buttons'>
              <button 
                className='button__green'
                onClick={() => this.props.history.push('/login')}>
                Register
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
