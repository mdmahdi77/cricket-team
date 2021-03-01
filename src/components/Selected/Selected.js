import React from 'react';
import './Selected.css';

const Selected = (props) => {
    const {image, fname, lname, price} = props.select;
    return (
        <div className="selected">
            <img src={image} alt=""/>
            <h2>{fname + " " + lname}({price})</h2>
        </div>
    );
};

export default Selected;