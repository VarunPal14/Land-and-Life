import React from 'react'
import "./about.css"
import Back from "../common/Back"
import img from "../images/about.jpg"
import Heading from '../common/Heading'

const About = () => {
  return (
    <>
    <section className='about'>
    <Back name="About Us" title="Who Are We?" cover={img}/>
    <div className="container flex mtop">
        <div className="left row">
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process'/>
            <p>The "LIFE AND LAND" serves as a comprehensive platform for buying, selling, and renting properties. It connects property seekers with real estate agents, developers, and property owners, providing a streamlined and user-friendly experience to facilitate real estate transactions.</p>
            <p>Any additions or changes to the land that affects the property's value are called an improvement. Once land is improved, the total capital and labor used to build the improvement represent a sizable fixed investment. Though a building can be razed, improvements like drainage, electricity, water and sewer systems tend to be permanent.</p>
            <button className='btn2'>More about us</button>
            
        </div>
        <div className='right row'>
         <img src="./images/immio.jpg" alt="" />
        </div>
    </div>
    </section>
    </>
  )
}

export default About