import React from 'react';

export default class MyPage extends React.Component {
    state = {
        schedule: true
    }

    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        }
    };
    
    renderSchedule(){
        return(
            <>{this.state.schedule
            ?<>an ongoing schedule.</>
            :<>no scheduled plan for today.</>}
            </>
        )
    }

    render() {
        return (
            <> 
            <header> 
                <h1>My Page</h1>
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
                    Welcome Back (name)! You currently have <span>{this.renderSchedule()}</span>
                    </div>
                </section>
                <section className='landingpage buttons'>
                    <button
                    type='button'
                    onClick={() => this.props.history.push('/mypage')}>
                        My ToDos
                    </button>
                    <button
                    type='button'
                    onClick={() => this.props.history.push('/info')}>
                        My Schedule
                    </button>
                    <button
                    type='button'
                    onClick={() => this.props.history.push('/login')}>
                        My Deep Work Data
                    </button>
                </section>
            </main>
            </>
        )
    }
}