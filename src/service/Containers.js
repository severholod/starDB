import React from 'react';
import PropTypes from 'prop-types'

export const Container = ({leftBlock, rightBlock}) => {
    return (
        <div className="row mb-2">
            <div className="col-md-6 mb-3 order-2 order-md-1">
                {leftBlock}
            </div>
            <div className="col-md-6 mb-3 order-1 order-md-2">
                {rightBlock}
            </div>
        </div>
    )
}

Container.propTypes = {
    leftBlock: PropTypes.node,
    rightBlock: PropTypes.node
}