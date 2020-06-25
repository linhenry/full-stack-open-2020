import React from 'react';

const Filter = (props) => {
    console.log(props)
    return (
        <div>
            filter shown with: <input
                value={props.filterName}
                onChange={props.handleFilterNameChange}
            />
        </div>
    );
};

export default Filter;
