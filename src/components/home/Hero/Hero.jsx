import React from "react";
import "./hero.css"
import Heading from "../../common/Heading";

const Hero =() => {
    return(
        <>
        <section className= "hero">
            <div className="container">
                <Heading title= "Search your next home"/>
                <form className="flex">
                    <div className="box"><span>City/Street</span>
                    <input type="text" placeholder="Location" />
                    </div>
                    <div className="box"><span>Property Type</span>
                    <input type="text" placeholder="Property Type" />
                    </div>
                    <div className="box"><span>Price Range</span>
                    <input type="text" placeholder="Price Range" />
                    </div>
                    <div className="box">
                    <button className="btn">
                        Advance Filter
                        </button>
                        
                    </div>
                    
                </form>
            </div>
        </section>
        </>
    )
}

export default Hero