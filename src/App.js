import React, { Component , useState } from "react";
import "./App.css";
import Category from "./components/Category";
import MensBaraa from "./components/Baraa";
import { ShoppingCartOutlined  } from '@ant-design/icons';

const App = () => {
  return ( 
    <>
      <div className="header">
        <li><a href="#">Logo</a></li>
        <button className="Sags"><ShoppingCartOutlined />Сагс</button>
      </div>
      <div className="main">
        <Category/>
        <MensBaraa/>
      </div>
    </>
   );
}
 
export default App;