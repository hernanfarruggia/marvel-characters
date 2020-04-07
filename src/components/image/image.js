import React from 'react';
import './image.css';

const Image = (props) => {

    const sizes = {
        avatar: 'standard_small',
        regular: 'portrait_uncanny'
    };

    const classes = {
        avatar: 'avatar',
        regular: 'regular'
    };

    const getAltText = () => {
        return `${ props.chaaracterName}'s iamge!`;
    }

    const getSrc = () => {
        const baseImg = props.image?.path;
        const imgSize = sizes[props.type];
        const ext = props.image?.extension;

        return `${baseImg}/${imgSize}.${ext}`;
    }

    return (
        <img
            alt={ getAltText() }
            className={ classes[props.type] }
            src={ getSrc() } />
    );
}

export default Image;