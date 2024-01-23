import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapPanel from './src/components/MapPanel';
import AdvertisementForm from './src/components/AdvertisementForm';
import AuctionComponent from './src/components/AuctionComponent';

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
