import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'

function App() {

  const [entries, setEntries] = useState([{weight: 176, date: '9-22-2022'}, {weight: 177, date: '9-23-2022'}])
  return (
    <div>
      <DisplayEntries parentEntries = {entries} />

    </div>
  );
}

export default App;
