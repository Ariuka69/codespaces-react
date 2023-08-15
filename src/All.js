import React, {useState , useEffect} from "react";
import {CloseOutlined , ShoppingCartOutlined } from "@ant-design/icons";
import Category from "./components/Category";
import Baraa from "./components/Baraa";

const All = () => {
  const [set, setSet] = useState([]);

  const Api = async () => {
    const i = await fetch("https://fakestoreapi.com/products/1");
    const a = await i.json();
    console.log(a);
    setSet(a);
  };
  useEffect(() => {
    Api();
  }, []);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
  <div className="main">
    <div className="header">
      <li><a href="#">Logo</a></li>
      <button className="Sags" onClick={toggleModal}><ShoppingCartOutlined />Сагс</button>
    </div>
    <div className="mai">
      <div className="niit">
        <Category />
        {modal && (
          <div className="popup1">
            <div className="popup">
              <div className="n"><img src={set.image} /></div>
              <li></li>
              <div className="m">
                <p>Үнэ</p>
                <h4>{set.price}$</h4>
                {set.description} <br/>
                <button>Sagsand Hiih</button>
              </div>
              <button className="close-btn" onClick={toggleModal}><CloseOutlined /></button>
            </div>
          </div>
          )}
        <Baraa />
      </div>
    </div>
  </div>
  );
};
 
export default All;