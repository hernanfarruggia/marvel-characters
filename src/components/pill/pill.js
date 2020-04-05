import React from 'react';
import './pill.css';

const Pill = (props) => {

    let classes = ['pill', props.type].join(' ');

    return (
        <div className={ classes }>
            { props.text }
        </div>
    )

}

export default Pill;