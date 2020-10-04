import React from 'react'
import {SwapiService} from '../service/SwapiService'
import {Loader} from '../service/Loader'
import {ErrorIndicator} from '../service/ErrorIndicator'

import PropTypes from 'prop-types'

export class RandomPlanet extends React.Component {
    static defaultProps = {
        updateInterval: 10000
    }
    static propTypes = {
        updateInterval: PropTypes.number
    }
    constructor() {
        super()
        this.state = {
            planet: {},
            loading: true,
            error: false
        }
        this.swapi = new SwapiService()

    }
    componentDidMount() {
        this.updatePlanet()
        setInterval(this.updatePlanet, this.props.updateInterval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 2)
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        if (this.state.loading) {
            return <Loader />
        }
        if (this.state.error) {
            return <ErrorIndicator/>
        }
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${this.state.planet.id}.jpg`}
                    alt="Planets Name"/>
                <div className="card-body">
                    <h4>{this.state.planet.name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{this.state.planet.population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{this.state.planet.rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{this.state.planet.diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}