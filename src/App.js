import React from 'react'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Art from './components/Art/Art';
import Review from './components/Review/Review';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
    <Router>
      <div>
     <Navbar/>
     </div>

    
     <Routes>
      <Route exact path="/" element={ <Art/>}>
     </Route>
     <Route exact path="/reviews" element={<Review/>}></Route>
     </Routes>
     {/* <div>
      <Footer/>
     </div> */}
     </Router>
    </>
     
  )
}

export default App