import React from 'react';

import Home from './views/home';
import About from './views/about';
import Topics from './views/topic';

import {
  Route,
  Link,
  jsHistory
} from './router'

const App = () => <div>
  <ul className="nav">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/topics">Topics</Link></li>
  </ul>
  <div>
    <button onClick={jsHistory.pushState.bind(this, '/')}>Home</button>
    <button onClick={jsHistory.pushState.bind(this, '/about')}>About</button>
    <button onClick={jsHistory.pushState.bind(this, '/topics')}>Topics</button>
  </div>
  <hr />
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/topics" component={Topics} />
</div>
export default App;
