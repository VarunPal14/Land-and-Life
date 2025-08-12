import React from 'react'
import Heading from '../../common/Heading'
import { team } from '../../data/Data'
import "./team.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Team = () => {
  return (
    <>
    <section className='team background'>
        <div className="container">
            <Heading title="Our featured agents"/>
            <div className="content mtop grid3">
                {team.map((val,index)=>(
                
                 <div className="box" key={index}>
                    <button className='btn3'>{val.list} Listings</button>
                    <div className="details">
                        <div className="img">
                            <img src={val.cover} alt="" />
                            
                        </div>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <label htmlFor="">{val.address}</label>
                        <h4>{val.name}</h4>

                        <ul>
                            {val.icon.map((icon,index)=>(
                                <li key={index}> {icon}</li>
                            ))}
                        </ul>
                        <div className="button flex">
                            <button>
                            <FontAwesomeIcon icon={faEnvelope}/>
                                Message
                            </button>
                            <button className='btn4'>
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                            </button>
                        </div>
                    </div>
                 </div>
                 ))}
            </div>
        </div>
        </section></>
  )
}

export default Team