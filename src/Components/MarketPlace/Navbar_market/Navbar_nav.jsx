import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Items from '../Items/Items'
import './Nav_style.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import renting from '../../../Assest/images/racing.png'
import my_assets_active from '../../../Assest/images/my_assets_active.png'
import { useSelector } from 'react-redux'
import My_Assets_first from '../My_Assets/My_Assets_first'
import Breeding from '../Breeding/Breeding'
import Racing_main from '../Racing/Racing_main'
import Marketplace_play_game from '../MarketPlace_play_game/Marketplace_play_game'
import Pages from '../Pages/Pages'
import Register from '../Register/Register'
import Edit_UserProfile from '../Edit_UserProfile/Edit_UserProfile'
import './styles.css'
import './nav_style_main.css'



export default function Navbar_nav() {

    return (
        <div>

            <div class="navbar PlayNow_Navbar">
                <div class="container">
                    {/* <div class="navbar-mp">
                        <a href="/MarketPlace" rel="noreferrer noopener" width="100%" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                            <div class="anim-mp">
                                <span>MARKETPLACE</span>
                            </div>
                        </a>
                    </div> */}

                    <div class="navbar-inner">

                        <Navbar collapseOnSelect expand="md" className='navbarnav'>
                            <Container>

                                <Nav className="mx-auto nav_link_text">
                                    {/* <Nav.Link href="#features">
                                        <Link to="/Items/pages"> <img alt="" src={fuse} width="100px" className='navbar_link_img' /> </Link>
                                    </Nav.Link>
                                    <Nav.Link href="#pricing"> <Link to="/Items/Marketplace_play_game">
                                        <img alt="" src={marketplace_active} width="100px" className='navbar_link_img' />
                                    </Link></Nav.Link> */}
                                    <Nav.Link href="#pricing"> <Link to="/Items/Racing_main">
                                        <li className='nav-item'>
                                            <img alt="" src={renting} width="100px" className='navbar_link_img racing_img' />
                                            <div class="nav-anim">
                                                <div id="views"></div>
                                                <div id="steps"></div>
                                                <div id="transition"></div>
                                            </div>
                                        </li>
                                    </Link>
                                    </Nav.Link>

                                    {/* {
                                        btnTxt == "Connect Metamask" ? (
                                            <>
                                                <Nav.Link href="#pricing">
                                                    <Link to="/Breeding">
                                                        <img alt="" src={breeding} width="100px" className='navbar_link_img' />
                                                    </Link>
                                                </Nav.Link>

                                            </>

                                        ) : (
                                            <>
                                               

                                                <Nav.Link href="#pricing">
                                                    <Link to="/Items/Mint">
                                                        <img alt="" src={my_assets_active} width="100px" className='navbar_link_img' />
                                                    </Link>
                                                </Nav.Link>


                                            </>

                                        )

                                    } */}
                                     <Nav.Link href="#pricing">
                                                    <Link to="/Items/Mint">
                                                        <img alt="" src={my_assets_active} width="100px" className='navbar_link_img' />
                                                    </Link>
                                                </Nav.Link>




                                </Nav>


                            </Container>
                            {/* <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                            {/* <Avatar
                                alt=""
                                src={userData || "camera.jpg"}
                            // src="camera.jpg"

                            /> */}
                            {/* </a> */}
                        </Navbar>


                    </div>



                </div>

            </div>
            <Routes>
                <Route exact path="/" element={<Items />} />
                <Route path="/Items/My_Assets" element={<My_Assets_first />} />
                <Route path="/Items/Breeding" element={<Breeding />} />
                <Route path="/Items/Racing_main" element={<Racing_main />} />
                <Route path="/Items/Marketplace_play_game" element={<Marketplace_play_game />} />
                <Route path="/Items/pages" element={<Pages />} />
                <Route path="/Items/registration" element={<Register />} />
                <Route path="/Items/Edit_UserProfile" element={<Edit_UserProfile />} />


            </Routes>
            <Outlet />

        </div>
    )
}
