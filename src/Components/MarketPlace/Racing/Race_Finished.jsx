import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import io from 'socket.io-client'
import { raceContractABI, raceContractAddress } from '../../../utilies/constant';
export default function Race_Finished() {
    const [FirstPosition, setFirstPosition] = useState(null)
    const [SecondPositopn, setSecondPositopn] = useState(null)
    const [ThirdPosition, setThirdPosition] = useState(null)
    // const SOCKET_URL = "https://larace.archiecoin.online/"
    const SOCKET_URL = "https://larace.archiecoin.online/"

    useEffect(()=>{
        const socket = io.connect(SOCKET_URL);
        socket.on("announce_game_winner", (data)=>{
            console.log("finish data",data)
            data?.forEach((element)=>{
        

                if (element.position == 1) {
                    setFirstPosition(element.name)
                } else if (element.position == 2) {
                    setSecondPositopn(element.name)
                } else if (element.position == 3) {
                    setThirdPosition(element.name)
                }
            })
        })
        return () => {
            socket.disconnect();
          }
    },[])
   
    
    
  

    return (
        <div className='main_div_app'>

            <div class="container">
                <div class="bx-view">
                    <div class="bx-full">
                        <div class="bx-header finish">
                            <div class="header-inner">
                                <div class="header-title ">
                                    <span>Finished</span>
                                </div>
                                {/* <div class="header-match">
                                    <div class="viewTable">
                                        <div class="tableContent">
                                            <div class="item-content disable">
                                                <div class="item-title no-border event">Race</div>
                                                <div class="item-title no-border class">
                                                    <div class="class-pega class-4">Class 4</div>
                                                </div>
                                                <div class="item-title no-border distance">3000m</div>
                                                <div class="item-title no-border date">{current_date}</div>
                                                <div class="item-title no-border prizepool visoff">
                                                    <span>1550</span>
                                                    <div style={{ marginLeft: "5px" }}>
                                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "18px", height: "18px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative" }}>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v5/images/coin/VIS_OFF.png" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                        <div class="bx-content finish">
                            <div class="inner-content">
                                <div class="viewLeaderboard">
                                    <div class="top-position">
                                        <div class="top-inner">
                                            <div class="item-top position-2">
                                                <div class="position-inner Second_Winner" >
                                                    <div class="item-id">2nd</div>
                                                    <div class="item-header">
                                                        <div class="item-location">{SecondPositopn != null?SecondPositopn : "Loading..."}</div>
                                                        <div class="item-location"> {SecondPositopn != null? "5 Coin" : "Loading..."}</div>

                                                        
                                                        <div class="item-position">
                                                            {/* <span class="item-position-name">00:31.242</span> */}
                                                        </div>
                                                    </div>
                                                    <div class="item-cover">
                                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "230px", height: "230px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative" }} >
                                                            <img alt="" src="https://cdn.pegaxy.io/data/pega-avatar/1659081379885.png" decoding="async" data-nimg="fixed" class="item-cover-img" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} /><noscript></noscript>
                                                        </span>
                                                    </div>
                                                    <div class="item-symbol">
                                                        {/* <span class="item-symbol-nums">388</span> */}
                                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "24px", height: "24px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative" }}>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v5/images/symbol/visoff.png" decoding="async" data-nimg="fixed" class="item-symbol-img" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} /><noscript></noscript>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-top position-1">
                                                <div class="position-inner first_winner" >
                                                    <div class="item-id">1st</div>
                                                 
                                                    <div class="item-header">
                                                        <div class="item-location">{FirstPosition!= null? FirstPosition : "Loading..."}</div>
                                                        <div class="item-location">{FirstPosition!= null? "10 Coin" : "Loading..."}</div>

                                                        <div class="item-position">
                                                            {/* <span class="item-position-name">00:31.241</span> */}
                                                        </div>
                                                    </div>
                                                    <div class="item-cover">
                                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "230px", height: "230px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative" }} >
                                                            <img alt="" src="https://cdn.pegaxy.io/data/pega-avatar/1659248327294.png" decoding="async" data-nimg="fixed" class="item-cover-img" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                            <noscript></noscript>
                                                        </span>
                                                    </div>
                                                    <div class="item-symbol">
                                                        {/* <span class="item-symbol-nums">930</span> */}
                                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "24px", height: "24px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative" }}>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v5/images/symbol/visoff.png" decoding="async" data-nimg="fixed" class="item-symbol-img" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                            <noscript></noscript>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-top position-3">
                                                <div class="position-inner Third_winner" >
                                                    <div class="item-id">3rd</div>
                                                    <div class="item-header">
                                                        <div class="item-location">{ThirdPosition!= null?ThirdPosition : "Loading..."}</div>
                                                        <div class="item-location">{ThirdPosition!= null? "3 Coin" : "Loading..."}</div>

                                                        <div class="item-position">
                                                            {/* <span class="item-position-name">00:31.243</span> */}
                                                        </div>
                                                    </div>
                                                    <div class="item-cover">
                                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "230px", height: "230px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative" }} >
                                                            <img alt="" src="https://cdn.pegaxy.io/data/pega-avatar/1659270437074.png" decoding="async" data-nimg="fixed" class="item-cover-img" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                            <noscript></noscript>
                                                        </span>
                                                    </div>
                                                    <div class="item-symbol">
                                                        {/* <span class="item-symbol-nums">232</span> */}
                                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "24px", height: "24px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative" }}>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/public/v5/images/symbol/visoff.png" decoding="async" data-nimg="fixed" class="item-symbol-img" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} /><noscript></noscript>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-action">
                                            <div class="item-button">
                                                <div class="button-game primary" style={{ height: "44px" }}>
                                                    <div class="btn-position button-game-left" style={{ width: "17.6px", height: "44px" }}>
                                                    </div>
                                                    <div class="btn-position button-game-content" style={{ height: "44px", paddingRight: "17.6px", paddingLeft: "17.6px" }}>
                                                        <div class="content-name">
                                                            <span class="content-name-title" style={{ fontSize: "18px" }}>
                                                                
                                                            <Link to="/Items/Racing_main" className='text-white text-decoration-none'>
                                                            BACK TO LOBBY

                                                            </Link>
                                                               </span>
                                                        </div>
                                                    </div>
                                                    <div class="btn-position button-game-right" style={{ width: "17.6px", height: "44px" }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-button">
                                                <div class="button-game pinks" style={{ height: "44px" }}>
                                                    <div class="btn-position button-game-left" style={{ width: "17.6px", height: "44px" }}>
                                                    </div>
                                                    <div class="btn-position button-game-content" style={{ height: "44px", paddingRight: "17.6px", paddingLeft: "17.6px" }}>
                                                        <div class="content-name">
                                                            <span class="content-name-title" style={{ fontSize: "18px" }}>
                                                            <Link to="/Items/Racing_main" className='text-white text-decoration-none'>
                                                            NEXT MATCH

                                                            </Link>
                                                                </span>
                                                        </div>
                                                    </div>
                                                    <div class="btn-position button-game-right" style={{ width: "17.6px", height: "44px" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
