import React, { useState } from 'react'
import Back from '../common/Back'
import img from "../images/pricing.jpg"
import "./contact.css"

const Contact = () => {
    
  return (
    <>
    <section className='contact mb'>
        <Back name="Contact Us" title="Get Help and Friendly Support" cover={img} />
        <div className="container">
            <div className="row">
                <h4>Our Location</h4>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.318621425578!2d77.44511047535845!3d28.6336111756641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d4e3485ed%3A0xe0fe1689b57c7d2e!2sABESIT%20GROUP%20OF%20INSTITUTIONS!5e1!3m2!1sen!2sin!4v1728211807292!5m2!1sen!2sin"></iframe>
            
            <form action='' className='shadow'>
                <h4>Fill up your details here.</h4>
                <div>
                    <input type='text' placeholder='Name' name='name' id='name'/>
                    <input type='text' placeholder='Email' name='email' id='' />
                </div>
                <input type='text' placeholder='Subject' name='subject' />
                <textarea name='message' id='para' cols="30" rows="10"></textarea>
                <button type='submit'>Submit Request</button>
              
            </form>
        </div>
        </div>
        </section>
        </>
  )
}

export default Contact