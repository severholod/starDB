import React from 'react'
import {ErrorBoundry} from '../service/ErrorBoundry'
import {StarshipsList} from '../components/lists'
import {withRouter} from 'react-router-dom'

export let Starships = ({history}) =>{
    return (
        <ErrorBoundry>
            <StarshipsList onItemSelected={(itemId) => history.push(itemId)} />
        </ErrorBoundry>
    )
}
Starships = withRouter(Starships)