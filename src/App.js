import './App.css';
import Home from './Pages/Home/Home';
import HeaderShop from './Components/HeaderShop/HeaderShop';
import Shop from "./Pages/Shop/Shop"; 
//import MenuItem from './Components/MenuItem/MenuItem';
import {
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (

        <div className="App">
          <Switch>
              <Route path="/" exact >
                   <Home />
              </Route>
              <Route path="/shop/:id">
                  <Shop  />
              </Route>
              

          </Switch>

    </div>
   
  );
}

export default App;
