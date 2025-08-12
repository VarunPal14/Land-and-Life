import React from 'react'
import {list} from "../../data/Data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faLocationDot} from '@fortawesome/free-solid-svg-icons'

const RecentCard =() => {
  return (
    <>
    <div className="content grid3 mtop">
        {list.map((val, index)=>{
            const{cover, category, location, name, price, type} = val;
            return(
                <div className="box shadow" key={index}>
                    <div className="img">
                        <img src={cover} alt="" />
                    </div>
                    <div className="text">
                        <div className="category flex">
                            <span style={{background: category==="For Sale"? "#edcdaf" : "#3d2d13", color: category === "For Sale"? "#3d2d13": "edcdaf"}}>{category}

                            </span>
                            <FontAwesomeIcon icon={faHeart}/>
                        </div>
                        <h4>{name}</h4>
                        <p>
                        <FontAwesomeIcon icon={faLocationDot}/>{location}
                        </p>
                    </div>
                    <div className="button flex">
                        <div>
                            <button className='btn2'>{price}</button>
                            <label htmlFor="">/sqft</label>
                        </div>
                        <span>{type}</span>
                    </div>
                    </div>
            )
        })}
    </div>
    </>
  )
}

export default RecentCard