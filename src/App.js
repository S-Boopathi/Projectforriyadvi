import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Create from './Pages/Create'
import Read from './Pages/Read'
import Update from './Pages/Update'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
function App() {
  return (
    <div>
       <Router>
          <Header/>
           <Routes>
              <Route path='/' exact element={<Create/>}></Route>
              <Route path='/read' element={<Read/>}></Route>
              <Route path='/update' element={<Update/>}></Route>
           </Routes>
           <Footer/>
       </Router>
    </div>
  )
}

export default App