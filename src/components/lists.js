import React from 'react'
import {SwapiService} from '../service/SwapiService';
import {ItemList} from './ItemList';
import {withData} from '../hoc/withData';

const swapi = new SwapiService()

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}
const renderName = ({name}) => <span>{name}</span>
const renderPlanetName = ({name, diameter}) => <span>{name} ({diameter})</span>
const renderStarshipName = ({name, model}) => <span>{name} ({model})</span>

export const PersonList = withData(withChildFunction(ItemList, renderName), swapi.getAllPeople)
export const PlanetList = withData(withChildFunction(ItemList, renderPlanetName), swapi.getAllPlanets)
export const StarshipsList = withData(withChildFunction(ItemList, renderStarshipName), swapi.getAllStarships)