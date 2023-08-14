import React , {useEffect, useState} from  "react";
import './Category.css'
import { RightOutlined  } from '@ant-design/icons';
const Category = () =>{
  const [section, setSection] = useState([]);
  const Api = async () => {
    const i = await fetch("https://fakestoreapi.com/products/categories");
    const a = await i.json();
    console.log(a);
    setSection(a);
  };
  useEffect(() =>{
    Api()
  },[])
  return (
      <div className="categ">
        <div className="adasd">
        <li><button><RightOutlined />{section[0]}</button></li>
        <li><button><RightOutlined />{section[1]}</button></li>
        <li><button><RightOutlined />{section[2]}</button></li>
        <li><button><RightOutlined />{section[3]}</button></li>
        </div>
      </div>
    ); 
}
 
export default Category;