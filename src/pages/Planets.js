import React from 'react'
import {Container} from '../service/Containers'
import {ErrorBoundry} from '../service/ErrorBoundry'
import {PlanetList} from '../components/lists';
import {PlanetDetails} from '../components/details';


export class Planets extends React.Component {
    constructor() {
        super()
        this.state = {
            selected: 2,
        }
    }
    selectItem = (id) => {
        this.setState({
            selected: id
        })
    }

    render() {
        return (
            <ErrorBoundry>
                <Container
                    leftBlock={
                        <PlanetList onItemSelected={this.selectItem} />
                    }
                    rightBlock={ <PlanetDetails itemId={this.state.selected}/> }/>
            </ErrorBoundry>
        )
    }
}