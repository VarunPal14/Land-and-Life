import React from 'react'
import "./footer.css"
import { footer } from '../../data/Data'

const Footer = () => {
  return (
    <>
    <section className='footerContact'>
        <div className="container">
            <div className="send flex">
                <div className="text">
                    <h1>Your questions here.</h1>
                </div>
                <button className='btn5'>Contact us today</button>
            </div>
        </div>
        </section>
        <footer>
            <div className="container">
                <div className="box">
                    <div className="logo">
                        <img src="../images/logo.png" alt="" />
                        <h2>Receive Updates, Hot Deals,<br/> Tutorials,
                             Discounts in your inbox.</h2>
                        <div className="input flex">
                            <input type='text' placeholder='Email address' name='' id=''/>
                            
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                {footer.map((val)=>(
                    <div className="box">
                        <h3>{val.title}</h3>
                        <ul>
                            {val.text.map((items)=>(
                                <li>{items.list}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
        <div className="legal">
            <span>© 2024 LandAndLife.  DESIGNED BY VARUN PAL</span>
        </div>
        </>
  )
}

export default Footer