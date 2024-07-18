import React from 'react';
import "./ShoseShop.scss";
const ShoseShop = (props) => {
  return (
    <div className='grid grid-cols-3 gap-8 container py-4'>
      {props.arrSanpham.map((item, index) => {
        return (
          <div className='custom-shadow p-4 space-y-3'>
            <img src={item.image} alt={item.name} />
            <h2 className='text-xl'>Name: {item.name}</h2>
            <p>Price: {item.price}$</p>
            <button onClick={()=>{
                props.layDuLieuGIay(item)
            }} className='bg-black py-2 px-5 rounded text-white hover:bg-red-500 hover:text-black hover:duration-500'>
              Add to carts <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShoseShop;
