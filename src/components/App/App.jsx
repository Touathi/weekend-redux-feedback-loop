import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Feedback from '../Feedback/Feedback';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className='App'>

        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

          {/* Page one */}
        <Route exact path="/">
          <Feelings />
        </Route>
        
          {/* Page two */}
        <Route exact path="/page-1">
          <Understanding />
        </Route>

          {/* Page three */}
        <Route exact path="/page-2">
          <Support />
        </Route>

          {/* Page four */}
        <Route exact path="/page-3">
          <Comments />
        </Route>

        {/* Page 5/ Review Your Feedback */}
        <Route exact path="/page-4">
          <Feedback />
        </Route>

      </div>
    </Router>
  );
}

export default App;
