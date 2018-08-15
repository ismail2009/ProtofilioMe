import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';
import Protfolio from '../Protfolio';
import Service from '../Service';
import Contact from '../Contact';

const App = () => (
  <Router>
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/protfolio" component={Protfolio} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
