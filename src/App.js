import React, { Component } from "react";
import "./App.css";
import Category from "./components/Category";
import { ShoppingCartOutlined  } from '@ant-design/icons';

const App = () => {
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