import React from 'react'
import {AppHeader} from './AppHeader'
import {RandomPlanet} from './RandomPlanet'
import {People} from '../pages/People'
import {ErrorBoundry} from '../service/ErrorBoundry'
import {SwapiServiceProvider} from '../service/SwapiServiceContext'
import {SwapiService} from '../service/SwapiService'
import {Planets} from '../pages/Planets'
import {Starships} from '../pages/Starships'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {StarshipDetails} from './details'
import {Login} from '../pages/Login'
import {SecretPage} from '../pages/SecretPage'

export class App extends React.Component {

    constructor() {
        super()
        this.swapi = new SwapiService()
        this.state = {
            isLoggedIn: false
        }
    }
    mainPageRender = () => {
        return (
            <div className='main-page'>
                <h2>Welcome to Star Wars DB</h2>
                <p>Please, select preferable section from menu</p>
            </div>

        )
    }
    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapi}>
                    <Router>
                        <div className="container">
                            <AppHeader />
                            <RandomPlanet />
                            <Switch>
                                <Route path="/" render={this.mainPageRender} exact/>
                                <Route path="/people/:id?" component={People} />
                                <Route path="/planets/" component={Planets} />
                                <Route path="/starships/" exact component={Starships} />
                                <Route path="/starships/:id"
                                       render={
                                           ({match, location, history}) => {
                                              return <StarshipDetails itemId={match.params.id}/>
                                           }
                                       } />
                                <Route path="/login" render={() => (
                                    <Login isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}/>
                                )}/>
                                <Route path="/secret-page" render={() => (
                                    <SecretPage isLoggedIn={this.state.isLoggedIn}/>
                                )}/>
                                <Route render={() => {
                                    return (
                                        <h2 className="notFound">Whoops! This page is not found</h2>
                                    )
                                }}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}