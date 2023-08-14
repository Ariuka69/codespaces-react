import React, {useEffect, useState } from "react";

const MensBaraa = () => {
  const [sectn, setSectn] = useState([]);
    const Ap = async () => {
        const i = await fetch("https://fakestoreapi.com/products");
        const a = await i.json();
        console.log(a);
        setSectn(a);
      };
    useEffect(() =>{
        Ap()
    },[]);
    console.log({sectn});
    return (
        <>
        <div className="niit">
          {sectn.map(o => 
          <div className="Baraa">
            <img src={o.image}/>
            <h4>{o.title}</h4>
            <p>{o.category}</p>
            <p>{o.price}$</p>
            <button>About</button>
          </div>)}
        </div>
        </>
    );
}
export default MensBaraa;