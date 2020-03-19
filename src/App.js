import React from 'react';
import {Route, Switch} from 'react-router-dom'
import config from './config';
import ApiContext from './ApiContext';
import LandingPage from './component/LandingPage/LandingPage'
import LoginPage from './component/LoginPage/LoginPage'
import MyPage from './component/MyPage/MyPage'
import RegistrationPage from './component/RegistrationPage/RegistrationPage'
import NoPage from './component/NoPage/NoPage'

export default class App extends React.Component {
    state = {
        activities: [],
        reflection: []
    }

    componentDidMount() {
        Promise
            .all([
                fetch(`${config.API_ENDPOINT}/activities`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json'
                    }
                }),
                fetch(`${config.API_ENDPOINT}/reflection`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
            ])
            .then(([activitiesRes, reflectionRes]) => {
                if (!activitiesRes.ok) 
                    return activitiesRes
                        .json()
                        .then(e => Promise.reject(e))
                if (!reflectionRes.ok) 
                    return reflectionRes
                        .json()
                        .then(e => Promise.reject(e))

                return Promise.all([activitiesRes.json(), reflectionRes.json()])
            })
            .then(([activities, reflection]) => {
                this.setState({activities, reflection})
            })
            .catch(error => {
                console.error({error})
            })
        }

    render() {
      const value = {
        activities: this.state.activities,
        reflection: this.state.reflection};
        console.log(value)
        return (
            <ApiContext.Provider value={value}>
                <> 
                <nav>
                </nav>
                <main>
                    <Switch>
                        <Route exact path='/' component={LandingPage}/>
                        <Route path='/mypage' component={MyPage}/>
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/register' component={RegistrationPage}/>
                        <Route component={NoPage}/>
                    </Switch>
                </main>
            </>
        </ApiContext.Provider>
        );
    }
}