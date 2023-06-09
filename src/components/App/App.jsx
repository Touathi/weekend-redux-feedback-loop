import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      {/* Page one */}
      <Feelings />

      {/* Page two */}
      <Understanding />

      {/* Page three */}
      <Support />

      {/* Page four */}
      <Comments />
    </div>
  );
}

export default App;
