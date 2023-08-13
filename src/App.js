import React, { Component } from "react";
import "./App.css";
import Category from "./components/Category";
import WomensBaraa from "./components/WomensBaraa";
import MensBaraa from "./components/MensBaraa";
import Jewelery from "./components/JeweleryBaraa";
import ElectronicBaraa from "./components/ElectronicBaraa";
import { ShoppingCartOutlined  } from '@ant-design/icons';

const App = () => {
  console.log(window.location);
  return ( 
    <>
    <div className="header">
      <li><a href="#">Logo</a></li>
      <button className="Sags"><ShoppingCartOutlined />Сагс</button>
    </div>
    <Category/>
    
      </>
   );
}
 
export default App;