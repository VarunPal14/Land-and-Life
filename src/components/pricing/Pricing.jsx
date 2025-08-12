import React from 'react'
import Back from '../common/Back'
import PriceCard from '../home/price/PriceCard'
import img from "../images/pricing.jpg"

const Pricing = () => {
  return (
    <>
    <section className='services mb'>
        <Back name="30 Days Money Back Guarantee." title="No Extra Fees" cover={img}/>
    <div className="price container">
        <PriceCard/>
    </div>
    </section>
    </>
  )
}

export default Pricing