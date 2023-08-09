import React , {useEffect, useState} from  "react";
import './Category.css'
const Category = () =>{
  const [section, setSection] = useState("");
  const api = () =>{
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>console.log(json)
        )
  };
  useEffect(() =>{
    api()
  },[])
  return (
      <>
        
      </>
    ); 
}
 
export default Category;