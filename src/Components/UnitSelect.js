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
        }

        props.onAddUnit(unitData);

        setSelect(select)

    }

    return (
        <div className="unit-select">
            <h2>Add Units</h2>
                <div className='unit-select__dropdown'>
                    <select onChange={dropdownUnitsHandler} value={select} points={units.cost}>
                        <option value='99'>Select Unit...</option>
                        <option value='0'>High Marshal Helbrecht</option>
                        <option value='1'>The Emperor's Champion</option>
                        <option value='2'>Chaplin Grimaldus</option>
                        <option value='3'>Primaris Crusader Squad</option>
                        <option value='4'>Crusader Squad</option>
                        <option value='5'>Primaris Sword Brethren</option>
                    </select>
                </div>
        </div>
    )
};

export default UnitSelect;