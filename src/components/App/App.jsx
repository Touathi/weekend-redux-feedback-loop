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

        <Route exact path="/">
          {/* Page one */}
          <Feelings />
        </Route>

        <Route exact path="/page-1">
          {/* Page two */}
          <Understanding />
        </Route>

        <Route exact path="/page-2">
          {/* Page three */}
          <Support />
        </Route>

        <Route exact path="/page-3">
          {/* Page four */}
          <Comments />
        </Route>

        <Route exact path="/page-4">
          {/* Page 5/ Review Your Feedback */}
          <Feedback />
        </Route>

      </div>
    </Router>
  );
}

export default App;
