import React from 'react'
import {SwapiServiceConsumer} from '../service/SwapiServiceContext'

export const withSwapi = (Wrapped) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapi) => {
                        return (
                            <Wrapped {...props} swapi={swapi}/>
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}