import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapPanel from './MapPanel';
import AdvertisementForm from './AdvertisementForm';
import AuctionComponent from './AuctionComponent';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/map-panel" component={MapPanel} />
          <Route path="/advertisement-form" component={AdvertisementForm} />
          <Route path="/auction" component={AuctionComponent} />
          {/* Ajoutez d'autres routes au besoin */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
