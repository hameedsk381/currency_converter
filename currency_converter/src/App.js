import "./App.css";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Converter from "./Components/Converter";
import Translist from "./Components/Translist";
import Homepage from "./Components/Homepage";




function App() {
 

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Homepage/>}>
      <Route path="/" element={<Converter/>}/>
      <Route path="/translist" element={<Translist/>}/>

    </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
