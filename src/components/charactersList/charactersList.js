import React from 'react';
import './charactersList.css';

function CharactersList () {

    return (
        <div className="left-column">
            <ul>
                <li>
                    <div className="avatar">Av</div>
                    <span>Iron Man</span>
                    <div className="flags">
                        <div className="flag">Flag 1</div>
                        <div className="flag">Flag 2</div>
                        <div className="flag">Flag 3</div>
                    </div>
                </li>
                <li>
                    <div className="avatar">Av</div>
                    <span>Spiderman</span>
                    <div className="flags">
                        <div className="flag">Flag 1</div>
                        <div className="flag">Flag 2</div>
                        <div className="flag">Flag 3</div>
                    </div>
                </li>
                <li>
                    <div className="avatar">Av</div>
                    <span>Hulk</span>
                    <div className="flags">
                        <div className="flag">Flag 1</div>
                        <div className="flag">Flag 2</div>
                        <div className="flag">Flag 3</div>
                    </div>
                </li>
                <li>
                    <div className="avatar">Av</div>
                    <span>Thor</span>
                    <div className="flags">
                        <div className="flag">Flag 1</div>
                        <div className="flag">Flag 2</div>
                        <div className="flag">Flag 3</div>
                    </div>
                </li>
                <li>
                    <div className="avatar">Av</div>
                    <span>Captain America</span>
                    <div className="flags">
                        <div className="flag">Flag 1</div>
                        <div className="flag">Flag 2</div>
                        <div className="flag">Flag 3</div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default CharactersList;