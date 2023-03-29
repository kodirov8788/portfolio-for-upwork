import React from 'react'
import "./Bra.scss"
import img1 from "../../images/port1.jpg"
import img2 from "../../images/port2.jpg"
import img3 from "../../images/port3.jpg"
import img4 from "../../images/port4.jpg"
import img5 from "../../images/port5.jpg"
import img6 from "../../images/port6.jpg"
import { FaSearchPlus } from "react-icons/fa"
import { BsLink45Deg } from "react-icons/bs"
function Bra() {
    return (
        <div className='Bra'>
            <div className="bra_carts">
                <div className="bra_cart">
                    <img src={img1} alt="" />
                    <div className='bra_car'>
                        <div className='bra_icons'>
                            <div className="bra_icon">
                                <FaSearchPlus />
                            </div>
                            <div className="bra_icon">
                                <BsLink45Deg style={{ fontSize: "18px" }} />
                            </div>
                        </div>
                        <h1>BRANADING DESIGN</h1>
                        <h2>LOGO DESIGN</h2>
                    </div>
                </div>
                <div className="bra_cart">
                    <img src={img2} alt="" />
                    <div className='bra_car'>
                        <div className='bra_icons'>
                            <div className="bra_icon">
                                <FaSearchPlus />
                            </div>
                            <div className="bra_icon">
                                <BsLink45Deg style={{ fontSize: "18px" }} />
                            </div>
                        </div>
                        <h1>BRANADING DESIGN</h1>
                        <h2>LOGO DESIGN</h2>
                    </div>
                </div>
                <div className="bra_cart">
                    <img src={img3} alt="" />
                    <div className='bra_car'>
                        <div className='bra_icons'>
                            <div className="bra_icon">
                                <FaSearchPlus />
                            </div>
                            <div className="bra_icon">
                                <BsLink45Deg style={{ fontSize: "18px" }} />
                            </div>
                        </div>
                        <h1>BRANADING DESIGN</h1>
                        <h2>LOGO DESIGN</h2>
                    </div>
                </div>
                <div className="bra_cart">
                    <img src={img4} alt="" />
                    <div className='bra_car'>
                        <div className='bra_icons'>
                            <div className="bra_icon">
                                <FaSearchPlus />
                            </div>
                            <div className="bra_icon">
                                <BsLink45Deg style={{ fontSize: "18px" }} />
                            </div>
                        </div>
                        <h1>BRANADING DESIGN</h1>
                        <h2>LOGO DESIGN</h2>
                    </div>
                </div>
                <div className="bra_cart">
                    <img src={img5} alt="" />
                    <div className='bra_car'>
                        <div className='bra_icons'>
                            <div className="bra_icon">
                                <FaSearchPlus />
                            </div>
                            <div className="bra_icon">
                                <BsLink45Deg style={{ fontSize: "18px" }} />
                            </div>
                        </div>
                        <h1>BRANADING DESIGN</h1>
                        <h2>LOGO DESIGN</h2>
                    </div>
                </div>
                <div className="bra_cart">
                    <img src={img6} alt="" />
                    <div className='bra_car'>
                        <div className='bra_icons'>
                            <div className="bra_icon">
                                <FaSearchPlus />
                            </div>
                            <div className="bra_icon">
                                <BsLink45Deg style={{ fontSize: "18px" }} />
                            </div>
                        </div>
                        <h1>BRANADING DESIGN</h1>
                        <h2>LOGO DESIGN</h2>
                    </div>
                </div>

            </div>

            <div className='btn'>
                <button>LOAD MORE</button>
            </div>
        </div>
    )
}

export default Bra