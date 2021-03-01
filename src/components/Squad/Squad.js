import React from 'react';
import Selected from '../Selected/Selected';
import './Squad.css';

const Squad = (props) => {
    const squad = props.squad;

    const totalPrice = squad.reduce( (totalPrice, player) => totalPrice + player.price, 0 )
    // const addPlayer = squad.reduce( (addPlayer, player) =>addPlayer + player.fname + player.lname, [])
    // console.log(addPlayer)
    return (
        <div className="squad">
            <h1>Player Squad</h1>
            <div className="squadTotal">
                <h3>Add Players : <span>{squad.length}</span></h3>
                <h3>Total Price of Players: <span>${totalPrice.toFixed(2)} Cr</span></h3>
            </div>
            <div>
                {
                    squad.map(select => <Selected select={select}></Selected>)
                }
            </div>
        </div>
    );
};

export default Squad;