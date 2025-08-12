import React from 'react'
import RecentCard from '../home/recent/RecentCard'
import img from '../images/about.jpg'
import Back from '../common/Back'


const Blog = () => {
  return (
    <>
    <section className='blog-out mb'>
        <Back title="Blog grid- Our blog" cover={img} />
        <div className="container recent">
            <RecentCard/>
        </div>
        </section></>
  )
}

export default Blog