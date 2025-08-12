import React from 'react'
import "./featured.css"
import Heading from '../../common/Heading'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <><section className='featured background'>
    <div className="container">
    <Heading title="Featured properties" subtitle= "Find all type of properties."/>
    <FeaturedCard/>
    </div>
    </section>
    </>
  )
}

export default Featured