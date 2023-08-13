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
      <div>
        <div className="adasd">
        <li><a href="#" ><RightOutlined />{section[0]}</a></li>
        <li><a href="#" ><RightOutlined />{section[1]}</a></li>
        <li><a href="#" ><RightOutlined />{section[2]}</a></li>
        <li><a href="#" ><RightOutlined />{section[3]}</a></li>
        </div>
      </div>
    ); 
}
 
export default Category;