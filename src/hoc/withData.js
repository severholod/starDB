import React from 'react';
import {Loader} from '../service/Loader';

export const withData = (View, getData) => {
    return class extends React.Component{
        constructor() {
            super()
            this.state = {
                items: null
            }
        }
        componentDidMount() {
            getData()
                .then((items) => {
                    this.setState({
                        items
                    })
                })
        }

        render () {
            if (!this.state.items) {
                return <Loader />
            }
            return <View {...this.props} data={this.state.items}/>
        }
    }
}