import React from "react";
import Slider1 from "../assets/image/slider-1.jpg"

// const x = 5;

// const myElement = <h1>{(x) < 4 ? "Hello" : " Good Bye"}</h1>

const Slider = () => {
    return(
        <section className="slider">
            {/* {myElement} */}
            <img src={Slider1} alt="Slider" />
        </section>
    )
}

export default Slider