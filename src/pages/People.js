import React from 'react'
import {Container} from '../service/Containers'
import {ErrorBoundry} from '../service/ErrorBoundry'
import {PersonList} from '../components/lists'
import {PersonDetails} from '../components/details'
import {withRouter} from 'react-router-dom'


export let People = ({history, match}) => {
    return (
        <ErrorBoundry>
            <Container
                leftBlock={
                    <PersonList onItemSelected={(itemId) => history.push(itemId)} />
                }
                rightBlock={ <PersonDetails itemId={match.params.id}/> }/>
        </ErrorBoundry>
    )
}
People = withRouter(People)