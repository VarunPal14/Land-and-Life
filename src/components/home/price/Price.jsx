import React from 'react'
import Heading from '../../common/Heading'
import PriceCard from './PriceCard'
import "./price.css"

const Price = () => {
  return (
    <>
    <section className='price padding'>
        <div className="container">
            <Heading title="Select your package"/>
            <PriceCard/>
        </div>
    </section></>
  )
}

export default Price