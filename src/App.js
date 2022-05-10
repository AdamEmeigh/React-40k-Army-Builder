// import Unit from './Components/Unit';
import React, { useState } from 'react';
import UnitList from './Components/UnitList';
import Title from './Components/Title';
import UnitSelect from './Components/UnitSelect';
import UnitLimit from './Components/UnitLimit';
import './App.css';

const App = () => {
const [army, setArmy] = useState([])
const [buildError, setBuildError] = useState(false)

const addUnitHandler = (model) => {
  let unitIsValid = validSelection(model)
  if (unitIsValid){
    setBuildError(false);
    setArmy((prevModels) => {
      let armyList = [...prevModels, model];
      return armyList.sort((a, b) => a.label - b.label)
    })
  } else {
    setBuildError(true)
  }
} 

const validSelection = (model) => {
  let existingUnits = army.filter(unit => unit.name === model.name)
  if (existingUnits.length < model.limit){
    return true
  }
  else {
    return false
  }
}

  return (
    <div className='army-list'>
      <Title />
      <UnitSelect onAddUnit={addUnitHandler} />
      {buildError && <UnitLimit />}
      <UnitList unit={army} />
    </div>
  );
}

export default App;
