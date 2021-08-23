import React from 'react'
import './Prime.css'
import { useHistory } from 'react-router-dom'

function Prime() {
    const history = useHistory();
    return (

        <div className="prime">

            <div className="prime_container">

            <img
            className="prime_image"
            src="https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif" 
            alt="lost travolta" />

            <h3> Oops! Bongo actually doesn't offer prime services, let's head back to the demo, shall we? </h3>

            <button
                onClick={e => history.push('/')}
            >
                    Bongo Home
            </button>

            </div>

        </div>
    )
}

export default Prime
