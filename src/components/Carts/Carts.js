import React from 'react'
import "./Carts.scss"
function Carts() {
    return (
        <div className='carts'>

            <div className='cartss'>
                <div className='cart'>
                    <h1>02.</h1>
                    <h2>WEB DESIGN</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.
                    </p>
                </div>
                <div style={{ backgroundColor: "#05C7AE", }} className='cart'>
                    <h1 style={{ color: "#064A3E" }}>01.</h1>
                    <h2 style={{ color: "#000" }}>UX/UI DESIGN</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.</p>
                </div>
                <div className='cart'>
                    <h1>03.</h1>
                    <h2>APP DESIGN</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.</p>
                </div>
            </div>

            <h3>SOME OF MY WORKS</h3>
        </div>
    )
}

export default Carts