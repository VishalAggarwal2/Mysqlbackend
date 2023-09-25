import React from 'react'
import {

Routes,
  Route,

} from "react-router-dom";
import Books from './Components/Books';
import Add from './Components/Add';
import Update from './Components/Update';
const App = () => {
  return (
    <div> 
<Routes>
  <Route path='/' element={<Books></Books>}></Route>
  <Route path='/add
  ' element={<Add></Add>}></Route>
  <Route path='/update' element={<Update></Update>}></Route>
</Routes>
      
    </div>
  )
}

export default App
