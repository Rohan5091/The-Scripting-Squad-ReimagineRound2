import "./Cards1.css";
import iceCream1 from "../../Images/ice-cream1.png";
import iceCream2 from "../../Images/ice-cream2.png";
import iceCream3 from "../../Images/ice-cream3.png";
import iceCream4 from "../../Images/ice-cream4.png";
import iceCream5 from "../../Images/ice-cream5.png";
import iceCream6 from "../../Images/ice-cream6.png";
import iceCream7 from "../../Images/ice-cream7.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const Cards1 = () => {
  const [start,Setstart]=useState(0);

  const cardDetails = [
    {
      image: iceCream1,
      name: "Naughty Nutella",
      type: "Ice cream",
      order: " ORDER NOW",
    },
    {
      image: iceCream2,
      name: "Ferrero Moments Mousse",
      type: "Ice cream",
      order: " ORDER NOW",
    },
    {
      image: iceCream3,
      name: "Brown Biscuit Boba",
      type: "Ice cream",
      order: " ORDER NOW",
    },
    {
      image: iceCream4,
      name: "Cotton Candy Lollipop",
      type: "Sundae",
      order: " ORDER NOW",
    },
    {
      image: iceCream5,
      name: "Mango Lollipop",
      type: "Sundae",
      order: " ORDER NOW",
    },
    {
      image: iceCream6,
      name: "Naughty Nutella",
      type: "Sundae",
      order: " ORDER NOW",
    },
    {
      image: iceCream7,
      name: "Golden Ferrero",
      type: "Sundae",
      order: "ORDER NOW",
    }
  ];
  return (
    <div className="main">
      <div className="topdiv">
        <p className="mst-INNOVATION">
          <span>What’s </span>
          New?
        </p>
      </div>
      <div className="ice-creams">
        <MdKeyboardArrowLeft onClick={()=>start>0 && Setstart(start-1)} style={{ height: '100px', width: '100px', color: 'blue' }}/>
        {
        cardDetails.map((card,index)=>{
          if (index>=start && index<start+3) {
            return <div className="card" key={index}>
            <img src={card.image} alt={card.name}/>
            <p>{card.name}</p>
            <span>{card.type}</span>
            <button>{card.order}</button>
           </div>
          }
          return "";
        })
       }
       <MdOutlineKeyboardArrowRight onClick={()=>start<4 && Setstart(start+1)} style={{ height: '100px', width: '100px', color: 'blue' }} />
      </div>
    </div>
  );
};

export default Cards1;
