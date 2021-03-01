import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Player.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Player = (props) => {
    const {image,fname,lname,status,price,country} = props.player;
    return (
        <div className="totalPlayer">
            {/* <h1>Total Players: {props.player.length}</h1> */}
            <div className="player">
                <img src={image} alt=""/>
                <div className="playerInfo">
                    <h2>{fname + " " + lname}</h2>
                    <h3>{status}</h3>
                    <h4>Auction Price: <span>${price} Cr</span></h4>
                    <h4>Country: <span>{country}</span></h4>
                    <button onClick={() => props.handleAddPlayer(props.player)} className="btn btn-danger mt-3"><FontAwesomeIcon icon={faPlus} />  Add player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;