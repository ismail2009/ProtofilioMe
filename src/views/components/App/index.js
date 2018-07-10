import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';

const App = () => (
  <div>
    <header className="home_header">
      <div className="outer-container">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    </header>
    <Footer />
  </div>
);

export default App;
