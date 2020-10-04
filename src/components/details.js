import React from 'react'
import {ItemDetails, Record} from './ItemDetails';
import {SwapiServiceConsumer} from '../service/SwapiServiceContext'


export const PersonDetails = ({itemId = 1}) => {
    return (
        <SwapiServiceConsumer>
            {
                (swapi) => {
                    return (
                        <ItemDetails
                            getItem={swapi.getPerson}
                            itemId={itemId}
                            getImage={swapi.getPersonImage}>
                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye Color"/>
                            <Record field="birthYear" label="Birth Year"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}
export const PlanetDetails = (props) => {
    return (
        <SwapiServiceConsumer>
            {
                (swapi) => {
                    return (
                        <ItemDetails
                            getItem={swapi.getPlanet}
                            itemId={props.itemId}
                            getImage={swapi.getPlanetImage}>
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation period"/>
                            <Record field="diameter" label="Diameter"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}
export const StarshipDetails = (props) => {
    return (
        <SwapiServiceConsumer>
            {
                (swapi) => {
                    return (
                        <ItemDetails
                            getItem={swapi.getStarship}
                            itemId={props.itemId}
                            getImage={swapi.getStarshipImage}>
                                <Record field="model" label="model"/>
                                <Record field="length" label="Length"/>
                                <Record field="costInCredits" label="Cost in credits"/>
                                <Record field="passengers" label="Passengers"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}