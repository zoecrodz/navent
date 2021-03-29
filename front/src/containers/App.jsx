import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TestContainer from './oneTestContainer';
import AllTestContainer from './allTestsContainer';
import Footer from '../components/Footer';
const App = () => {
  return (
    <div>     
      <Switch>
        <Route path="/test/:id" render={({match}) => <TestContainer id={match.params.id}/>} />
        <Route path="/test" render={() => <AllTestContainer />} />
        <Route exact path="/" render={() => <div>Inicio</div>} />
        <Route path="/404" render={() => <div>Página no encontrada</div>} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
      </div> 
  );
};

export default App;
