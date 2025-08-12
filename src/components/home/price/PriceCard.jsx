import React from 'react'
import { price } from '../../data/Data'

const PriceCard = () => {
  return (
    <>
    <div className="content flex mtop">
        {price.map((item, index)=>(
            <div className="box shadow" key={index}>
            <div className="topbtn">
                <button className='btn3'>{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
                <span>₹</span>
                {item.price}
            </h1>
            <p>{item.ptext}</p>
            <ul>
                {item.list.map((val)=>{
                    const{icon, text, change}=val
                    return(
                    <li>
                        <label htmlFor="" style={{
                            background: change==="color"? "#dc35451d" : "rgba(109, 63, 3, 0.05)", color: change=== "color" ? "#dc3848" : "rgb(109, 63, 3)"
                             }}>
                                {icon}
                             </label>
                             <p>{text}</p>
                    </li>
                    )
                })}
            </ul>
            <button className='btn5' style={{
                            background: item.plan==="Standard"? "rgb(109, 63, 3)" : "#fff", color: item.plan=== "Standard" ? "#fff" : "rgb(109, 63, 3)"
                             }}>
                                Start{item.plan}
                             </button>
           </div>
        ))}
    </div>
    </>
  )
}

export default PriceCard