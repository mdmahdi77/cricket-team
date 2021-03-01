import React, { useEffect, useState } from 'react';
import playersData from '../../data/MOCK_DATA.json';
import Player from '../Player/Player';
import Squad from '../Squad/Squad';
import './Team.css';

const Team = () => {
    const playerList = playersData;
    const [players, setPlayers] = useState([]);
    const [squad, setSquad] = useState([]);

    useEffect(() =>{
        setPlayers(playerList);
    }, []);

    const handleAddPlayer = (player) => {
        const newSquad = [...squad, player];
        setSquad(newSquad);
    }

    return (
        <div className="teamContainer">
            <div className="playerContainer">
            <h1>Total Players: {players.length}</h1>
                    {
                       players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player}></Player>)
                    }
            </div>
            <div className="squadContainer">
                    <Squad squad={squad}></Squad>
            </div>
        </div>
    );
};

export default Team;