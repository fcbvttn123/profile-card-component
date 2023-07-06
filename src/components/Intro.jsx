import React from "react"
import ReactDOM from "react-dom/client"
import imgVictor from "../../images/image-victor.jpg"
import "../css/intro.css"

export default function Intro() {
    return (
        <div className="container">
            <img src={imgVictor} />
            <p className="name">Victor Crest <span>26</span> </p>
            <p className="country">London</p>        
        </div>
    )
} 