import React from "react";

const Baraa = ({ item, onItemClick }) => {
    return (
        <>
        <div className="nii">
          <div className="Baraa">
            <div>
              <img src={item.image}/>
              <h4>{item.title}</h4>
              <p>{item.category}</p>
              <p>{item.price}$</p>
              </div>
            <button onClick={() => onItemClick(item)}>About</button>
          </div>
        </div>
        </>
    );
}
export default Baraa;