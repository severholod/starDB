import React from 'react'
import {Loader} from '../service/Loader';
import {ErrorIndicator} from '../service/ErrorIndicator';

export const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export class ItemDetails extends React.Component {

    constructor() {
        super()
        this.state = {
            item: {},
            image: null,
            loading: true,
            error: false
        }

    }
    updateItem = () => {
        this.setState({loading: true})
        const id = this.props.itemId
        if (!id) {
            return
        }
        this.props.getItem(id)
            .then((item) => {
                this.setState({
                    item,
                    image: this.props.getImage(item),
                    loading: false
                })
            })
            .catch(this.onError)

    }
    componentDidMount() {
        this.updateItem()
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
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
            return <ErrorIndicator />
        }
        const {item} = this.state
        return (
            <div className="item-details card">
                <img className="item-image"
                    src={this.state.image}
                    alt={item.name}/>

                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, child => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}