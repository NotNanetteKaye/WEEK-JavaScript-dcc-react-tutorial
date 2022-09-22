import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './Apps.css'

function App() {

  const [entries, setEntries] = useState([{weight: 176, date: '9-22-2022'}, {weight: 177, date: '9-23-2022'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div className="container-fluid">
    <div className="row">
      <h3 style={{margin: '1em'}}>Weight
      <small className='text-muted'>Tracker</small></h3>
      <div className="col-md-6">
        <div className="border-box">
          <DisplayEntries parentEntries = {entries} />
        </div>
        <div className="border-box">
          <AddEntryForm addNewEntryProperty={addNewEntry}/>
        </div>
      </div>
      <div class="col-md-6">
        <div className="border-box">
        <EntriesChartTracker parentEntries= {entries} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
