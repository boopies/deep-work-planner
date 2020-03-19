import React from 'react';

export default class LandingPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        }
    };
    
    render() {
        return (
            <> 
            <header> 
                <h1>Deep Work Daily Planner</h1>
            </header>
            <main>
                <section className='landingpage introduction'>
                    <div className='landingpage introduction quote'>
                        "High-Quality Work Produced = Time Spent X Intensity of Focus"
                    </div>
                    <div className='landingpage introduction author'>
                        -Cal Newport
                    </div>
                </section>
                <section>
                    <div className='landingpage app__intro'>
                    Deep Work Daily Planner as you can guess is a daily planner. The purpose of this web app is for you
                    to get into the habit of setting periods of deep work and sticking to it. This app also tries to have you 
                    prioritize important activities, and ask yourself the question "Does this really need to be done now?"
                    <br />
                    <br />
                    If you are a member, please login and start planning your day. If you are  wondering what this is all about. 
                    Please click on the Read More button to read more about Deep Work, and if you like what you see, Register.
                    </div>
                </section>
                <section className='landingpage buttons'>
                    <button
                    type='button'
                    onClick={() => this.props.history.push('/mypage')}>
                        My Page
                    </button>
                    <button
                    type='button'
                    onClick={() => this.props.history.push('/info')}>
                        What is Deep Work?
                    </button>
                    <button
                    type='button'
                    onClick={() => this.props.history.push('/login')}>
                        Login
                    </button>
                    <button
                    type='button'
                    onClick={() => this.props.history.push('/register')}>
                        Register
                    </button>
                </section>
            </main>
            </>
        )
    }
}