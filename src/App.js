import React, { useState } from 'react';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '9-21-2022'}])
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Entry Number</th> 
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>175</td>
            <td>9-21-2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
