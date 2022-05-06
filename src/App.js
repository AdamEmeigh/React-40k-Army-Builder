// import Unit from './Components/Unit';
import React, { useState } from 'react';
import UnitList from './Components/UnitList';
import Title from './Components/Title';
import UnitSelect from './Components/UnitSelect';
import './App.css';

const App = () => {
const [army, setArmy] = useState('')

const addUnitHandler = (model) => {
  setArmy((prevModels) => {
    let armyList = [...prevModels, model];
    return armyList.sort((a, b) => a.label - b.label)
  })
}

  return (
    <div className='army-list'>
      <Title />
      <UnitSelect onAddUnit={addUnitHandler} />
      {/* <Unit unit={unit} /> */}
      <UnitList unit={army} />
    </div>
  );
}

export default App;
