import React from 'react';

import './Unit.css';

const Unit = (props) => {

    return (
            <li className='unit-profile'>
                <h2 className="slot">{props.slot}</h2>
                <h3 className="unit-name">{props.name}</h3>
                <h2 className="slot">Stats</h2>
                <table>
                    <thead>
                        <tr className='unit-profile__stat__cats'>
                            <th>M </th>
                            <th>WS</th>
                            <th>BS</th>
                            <th>S </th>
                            <th>T </th>
                            <th>W </th>
                            <th>A </th>
                            <th>Ld</th>
                            <th>Sv</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='unit-profile__stats'>
                            <td>{props.move}</td>
                            <td>{props.ws}</td>
                            <td>{props.bs}</td>
                            <td>{props.str}</td>
                            <td>{props.tough}</td>
                            <td>{props.wounds}</td>
                            <td>{props.atk}</td>
                            <td>{props.ld}</td>
                            <td>{props.save}</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="slot">Cost</h2>
                <h3 className="unit-name">{props.cost}</h3>
                {/* <button onClick={clickHandler}>Heresy?</button> */}
            </li>
    );
}

export default Unit;