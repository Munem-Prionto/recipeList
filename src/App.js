import './App.css';

import Nav from './Components/Nav';

import Home from './Pages/Home';
import Item from './Pages/Item';
import List from './Pages/List';

import {useState , useEffect } from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom';


 
function App() {


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>

          <Route path='/list/:id'>
            <List></List>
          </Route>

          <Route path='/item/:id'>
            <Item></Item>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
