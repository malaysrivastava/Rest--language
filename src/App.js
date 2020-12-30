import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Components/Home'

const App=()=> {
  return (
    <div>
     <BrowserRouter>
      <Switch>
       <Route path="/" exact render={props=> <Home {...props} />} />
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
