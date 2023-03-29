import React from 'react'
import "./Next_navbar.scss"
import img from "../../images/men.jpg"
import { AiOutlineCloudDownload } from "react-icons/ai"
import { BsFillPencilFill, BsAirplane, BsMusicNoteBeamed, BsRocketTakeoff } from "react-icons/bs"
import { FaCoffee } from "react-icons/fa"
import { IoIosColorPalette } from "react-icons/io"


function Next_navbar() {
    return (
        <div className='container'>
            <div className="divs">
                <div className="box">
                    <div className="small_box">
                        <img src={img} alt="" />
                    </div>
                    <button>
                        <AiOutlineCloudDownload className='icon' />
                        <p>Download Resume</p></button>
                </div>
                <div className="box2">
                    <h1>ABOUT ME</h1>
                    <h4>Hello! I’m Oliver Queen. Web Developer with over 8 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership.</h4>
                    <div className="text">
                        <h3>DATA OF BIRTH:</h3> <p style={{ marginLeft: "165px" }}>14 February 1986</p>
                        <h3>NATIONALITY:</h3>  <p style={{ marginLeft: "145px" }}>Citizen Of Envato</p>
                        <h3>ADDRESS:</h3><p style={{ marginLeft: "117px" }}>23 High Hope Blvd., Some City </p>
                        <h3>PHONE:</h3> <p style={{ marginLeft: "90px" }}>(123) - 456-7890, (123) - 456-7890</p>
                        <h3>E-MAIL:</h3> <p style={{ marginLeft: "87px" }}>oliver.queen@yahoo.com</p>
                    </div>

                </div>
            </div>
            <div className="bottom">
                <h1>MY INTERESTS</h1>
                <div className="radius_box">
                    <div className="icons">
                        <BsFillPencilFill className='icon' />

                        <p style={{
                            marginLeft: "0px"
                        }} >Drawing</p>

                    </div>

                    <div className="icons">
                        <BsAirplane className='icon' />
                        <p style={{
                            marginLeft: "6px"
                        }}>Travel</p>

                    </div>

                    <div className="icons">
                        <BsMusicNoteBeamed className='icon' />
                        <p style={{
                            marginLeft: "8px"
                        }}>Music</p>

                    </div>

                    <div className="icons">
                        <FaCoffee className='icon' />
                        <p style={{
                            marginLeft: "2px"
                        }}>Coffee</p>

                    </div>

                    <div className="icons">
                        <BsRocketTakeoff className='icon' />
                        <p style={{
                            marginLeft: "4px"
                        }}>Flying</p>


                    </div>


                    <div className="icons">
                        <IoIosColorPalette className='icon' />
                        <p style={{
                            marginLeft: "28px"
                        }}>Art</p>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Next_navbar