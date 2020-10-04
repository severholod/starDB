import React from 'react'

export class ItemList extends React.Component {

    renderItems = (items) => {
        return items.map(item => {

            const label = this.props.children(item)

            return (
                <li className="list-group-item"
                    key={item.id}
                    onClick={() => this.props.onItemSelected(item.id)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const items = this.renderItems(this.props.data)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}

