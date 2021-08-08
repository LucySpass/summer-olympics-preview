import React, {lazy, Suspense} from 'react';
import './App.css';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import routes from "./app-routes";
import {Footer, Header} from "./components";

function App() {
  function getLazyComponent(path: string) {
    return lazy(() => import('./' + path))
  }

  return (
    <div className="App">
      <Header/>
      <div className='App__content'>
        <Router>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
              <Route exact path="/">
                <Redirect to={'/home'}/>
              </Route>
              {routes.map(({path, componentPath}) => {
                return <Route exact
                              key={path}
                              path={path}
                              component={getLazyComponent(componentPath)}/>
              })}
              <Redirect to="/home"/>
            </Switch>
          </Suspense>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
