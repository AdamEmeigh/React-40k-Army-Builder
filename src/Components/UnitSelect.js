import React, { useState } from 'react';
import './UnitSelect.css';

const units = [
    {
      label: 0,
      slot: "HQ",
      name: "High Marshal Helbrecht",
      move: 6,
      ws: 2,
      bs: 2,
      str: 4,
      tough: 4,
      wounds: 8,
      atk: 6,
      ld: 9,
      save: 2,
      cost: 160,
      limit: 1
    },
    {
      label: 1,
      slot: "HQ",
      name: "The Emperor's Champion",
      move: 6,
      ws: 2,
      bs: 3,
      str: 4,
      tough: 4,
      wounds: 5,
      atk: 5,
      ld: 9,
      save: 2,
      cost: 100,
      limit: 1
    },
    {
      label: 2,
      slot: "HQ",
      name: "Chaplain Grimaldus",
      move: 6,
      ws: 2,
      bs: 3,
      str: 4,
      tough: 4,
      wounds: 5,
      atk: 4,
      ld: 9,
      save: 3,
      cost: 140,
      limit: 1
    },
    {
      label: 3,
      slot: "Tr",
      name: "Primaris Crusader Squad",
      move: 6,
      ws: 3,
      bs: 3,
      str: 4,
      tough: 4,
      wounds: 2,
      atk: 2,
      ld: 8,
      save: 3,
      cost: 175,
      limit: 3
    },
    {
      label: 4,
      slot: "Tr",
      name: "Crusader Squad",
      move: 6,
      ws: 3,
      bs: 3,
      str: 4,
      tough: 4,
      wounds: 2,
      atk: 1,
      ld: 7,
      save: 3,
      cost: 90,
      limit: 3
    },
    {
      label: 5,
      slot: "El",
      name: "Primaris Sword Brethren",
      move: 6,
      ws: 3,
      bs: 3,
      str: 4,
      tough: 4,
      wounds: 2,
      atk: 2,
      ld: 8,
      save: 3,
      cost: 150,
      limit: 3
    },
  ]

const UnitSelect = (props) => {
    const [select, setSelect] = useState('');

    const dropdownUnitsHandler = (event) => {
        event.preventDefault();

        const unitData = {
            label: units[event.target.value].label,
            slot: units[event.target.value].slot,
            name: units[event.target.value].name,
            move: units[event.target.value].move,
            ws: units[event.target.value].ws,
            bs: units[event.target.value].bs,
            str: units[event.target.value].str,
            tough: units[event.target.value].tough,
            wounds: units[event.target.value].wounds,
            atk: units[event.target.value].atk,
            ld: units[event.target.value].ld,
            save: units[event.target.value].save,
            cost: units[event.target.value].cost,
            limit: units[event.target.value].limit
        }

        props.onAddUnit(unitData);

        setSelect(select)

    }

    const unitOptions = units.map((unit) => (
      <option value={unit.label} key={unit.label}>{unit.name}</option>
    )) 

    return (
      <div className="unit-select">
          <h2>Add Units</h2>
            <div className='unit-select__dropdown'>
                <select onChange={dropdownUnitsHandler} value={select}>
                    <option value='99'>Select Unit...</option>
                    {unitOptions}
                </select>
            </div>
      </div>
    )
};

export default UnitSelect;

