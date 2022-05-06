import { useState } from "react"
import Unit from "./Unit"
import './UnitList.css'

const UnitList = (props) => {

    if (props.unit.length === 0) {
        return <h2 className="no-unit">No Units Added <br/> Add Units Above</h2>
    }

    return (
        <ul >
            {props.unit.map((stats) => (
                <Unit
                    key={stats.label}
                    name={stats.name}
                    slot={stats.slot}
                    move={stats.move}
                    ws={stats.ws}
                    bs={stats.bs}
                    str={stats.str}
                    tough={stats.tough}
                    wounds={stats.wounds}
                    atk={stats.atk}
                    ld={stats.ld}
                    save={stats.save}
                    cost={stats.cost}
                />
            ))}
        </ul>
    );
}

export default UnitList