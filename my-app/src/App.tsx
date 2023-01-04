import React from 'react';
import Layout from "./containers/layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import RouterElement from "./containers/router";
import Main from "./pages/main";
import Registration from "./pages/registration";


function App() {
  return (
<BrowserRouter>
   <Layout/>


</BrowserRouter>


  );
}

export default App;
