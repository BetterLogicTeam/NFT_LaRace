import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar_nav from "../Navbar_market/Navbar_nav";
import "./Horse_style.css";
import horse from "../../../Assest/home_horse.png";
import horsegif from "../../../Assest/horse.gif";
import first from "../../../Assest/horse1.gif";
import Second from "../../../Assest/horse2.gif";
import third from "../../../Assest/horse3.gif";
import moment from "moment";
import Countdown from "react-countdown";
// moment().format();

import { loadWeb3 } from "../../../apis/api";
import {
  raceContractABI,
  raceContractAddress,
} from "../../../utilies/constant";
import axios from "axios";
import io from "socket.io-client";
const race = horsegif;
// const race1 = "https://cdn.Wire NFT.io/statics/web/race_1.webp";
// const race2 = "https://cdn.Wire NFT.io/statics/web/race_2.webp";
// const race3 = "https://cdn.Wire NFT.io/statics/web/race_3.webp";

const race1 = first;
const race2 = Second;
const race3 = third;

export default function Horse_Racing() {
  const SOCKET_URL = "https://larace.archiecoin.online/";

  let simpleArray = [];
  const navigate = useNavigate();
  const [myArr, setmyArr] = useState([]);
  const [array] = React.useState([1, 2, 3, 4, 5]);
  const [displayArray, setDisplayArray] = React.useState([]);
  const [raceArray, setRaceArray] = React.useState([]);
  const [displayEl, setDisplayEl] = React.useState([]);
  const [Itemcount, setItemcount] = useState(1);
  const [isChaling, setIsChaling] = useState(true);
  const [finishLine, setFinishLine] = useState(false);
  const [raceMeter, setRaceMeter] = useState(false);
  const [isRace, setIsRace] = useState(false);
  let [isLine, setIsLine] = useState(false);
  let [startTime, setStartTime] = useState({
    sec: 0,
    milSec: 0,
  });
  var date = new Date();
  var current_date =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  const delay = (ms) =>
    new Promise((res) => {
      setTimeout(() => {
        res();
      }, ms);
    });

  useEffect(() => {
    const socket = io.connect(SOCKET_URL);
    socket.on("start_betting_phase", (data) => {
      console.log("soceket Data", data);
      setIsLine(true);
      setIsChaling(true);
      setDisplayEl(data?.raceAddresses);
      setStartTime(data?.time);
      if (data?.raceAddresses.length == 15) {
        setRaceMeter(true);
      }
    });
    socket.on("start_game_phase", (data) => {
      setRaceArray(data);
      setIsChaling(false);
      setIsRace(true);
      setIsLine(false);
    });
    socket.on("stop_game_phase", async () => {
      setFinishLine(true);
      await delay(500);
      navigate("/Items/Race_Finished");
    });

    return () => {
      socket.disconnect();
    };
  }, [  ]);

  useEffect(() => {
    // getRaceIds()
    // getTimeStartRace();
    setInterval(() => {}, 1000);
  }, []);
  const Completionist = () => {
    return (
      <>
        <div className="text_days fs-5 ">Time Ended</div>
      </>
    );
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <>
         
          <span class="gameState-info" style={{marginTop:"-1rem"}} >{minutes} M {seconds} S</span>
        </>
      );
    }
  };

  return (
    <div>
      {/* <Navbar_nav setModalShow={setModalShow} btnTxt={btnTxt} /> */}

      <div className="main_div_app">
        <div class="container">
          <div class="bx-view">
            {/* <p>
                            <button onClick={() => myMove()}>Click Me</button>
                        </p> */}
            {/* {
                            console.log("Array",myArr)
                        } */}

            <div class="bx-left">
              {/* <h1>Hello CodeSandbox</h1>
                            {displayArray.map((elem, key) => (
                                <div key={key}>Number: {elem.title}</div>
                            ))} */}

              <div class="bx-view">
                <div class="bx-left">
                  <div class="bx-header">
                    <div class="header-inner">
                      <div class="header-title">
                        <div class="custom-container">
                          {isRace ? (
                            <>
                             
                              <div class="gameState-container">
                                <span>
                                  Timer:
                                </span>
                                
                                <Countdown
                                    date={
                                      Date.now() +
                                      (parseInt(startTime + Number(62)) * 1000 -
                                        Date.now())
                                    }
                                    renderer={renderer}
                                  />
                              
                              </div>
                            </>
                          ) : (
                            <>
                              <div class="gameState-container">
                                <span>
                                  WAITING<div class="animate-dot">...</div>
                                </span>
                                <span class="gameState-info">
                                  {displayEl.length}/15
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div class="header-tab">
                        <ul>
                          <Link to="/Items/horse_racing">
                            <li class="active">
                              <div class="item-tab">
                                <div class="item-tab-icon">
                                  <div className="items_tab_inneree">
                                    <img
                                      alt=""
                                      src="images/ic_start_active.png"
                                      decoding="async"
                                      data-nimg="fixed"
                                      className="items_img_here"
                                    />
                                    <noscript></noscript>
                                  </div>
                                </div>
                                <a class="item-tab-title">Live Racing</a>
                              </div>
                            </li>
                          </Link>
                          <Link to="/Items/Finished_race">
                            <li class="">
                              <div class="item-tab">
                                <div class="item-tab-icon">
                                  <div className="items_tab_inneree">
                                    <img
                                      alt=""
                                      src="images/ic_finish.png"
                                      decoding="async"
                                      data-nimg="fixed"
                                      className="items_img_here"
                                    />
                                    <noscript></noscript>
                                  </div>
                                </div>

                                <span class="item-tab-title">
                                  Races History
                                </span>
                              </div>
                            </li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="bx-content opened">
                    <div class="inner-content">
                      <div class="viewOpened">
                        <div class="viewTable">
                          <div class="tableHeader">
                            <div class="header-title event">Event</div>
                            <div class="header-title location">Location</div>
                            {/* <div class="header-title class"> Class</div> */}
                            <div class="header-title distance">Distance</div>
                            <div class="header-title date">Date</div>
                          </div>
                          <div class="tableContent">
                            <div class="item-content disable">
                              <div class="item-title event">Race</div>
                              <div class="item-title location align-center">
                                Wire NFT
                              </div>
                              {/* <div class="item-title class align-center">
                                                                <div class="class-pega class-4">Class 4</div>
                                                            </div> */}
                              <div class="item-title distance align-center">
                                3000m
                              </div>
                              <div class="item-title date align-center">
                                {current_date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="race-container">
                        <div class="race-view">
                          <div class="race-stats">
                            <div class="race-horse">
                              {isChaling
                                ? displayEl.map((items, index) => {
                                    // setItemcount(index)
                                    // console.log("Index",index);
                                    return (
                                      <>
                                        <div class="item-race">
                                          <div class="hourse-cover">
                                            <div class="cover-inner"></div>
                                          </div>
                                          <div class="hourse-info">
                                            <div
                                              class="hourse-title"
                                              style={{ color: "#fff" }}
                                              title="LegendaryDog3"
                                            >
                                              {items ? (
                                                items.substring(0, 6) +
                                                "..." +
                                                items.substring(
                                                  items.length - 6
                                                )
                                              ) : (
                                                <>Waiting..</>
                                              )}
                                            </div>
                                            <div class="hourse-position">
                                              {index + 1}
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })
                                : raceArray?.map((items, index) => {
                                    // setItemcount(index)
                                    // console.log("Index",index);
                                    return (
                                      <>
                                        <div class="item-race">
                                          <div class="hourse-cover">
                                            <div class="cover-inner"></div>
                                          </div>
                                          <div class="hourse-info">
                                            <div
                                              class="hourse-title"
                                              style={{ color: "#fff" }}
                                              title="LegendaryDog3"
                                            >
                                              {items ? (
                                                items.name.substring(0, 6) +
                                                "..." +
                                                items.name.substring(
                                                  items.name.length - 6
                                                )
                                              ) : (
                                                <>Waiting..</>
                                              )}
                                            </div>
                                            <div class="hourse-position">
                                              {index + 1}
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })}
                            </div>
                          </div>
                          <div class="race-track">
                            <div id="racetrack-container" class="racetrack-15">
                              <div id="racetrack">
                                <div class="view-line">
                                  <div class="racetrack-row">
                                    <div class="line-row start"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row finish"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                    <div class="line-row"></div>
                                  </div>
                                  <div class="racetrack-time">
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(47, 119, 171)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(221, 196, 18)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(221, 196, 18)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(221, 196, 18)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(47, 119, 171)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(221, 196, 18)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(47, 119, 171)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(47, 119, 171)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(221, 196, 18)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(221, 196, 18)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(47, 119, 171)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(47, 119, 171)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(221, 196, 18)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(47, 119, 171)" }}
                                      ></span>
                                    </div>
                                    <div class="line-row">
                                      <span
                                        style={{ color: "rgb(47, 119, 171)" }}
                                      ></span>
                                    </div>
                                  </div>
                                </div>
                                {raceMeter && (
                                  <div class="view-racetrack type-1 racetrack-15">
                                    <div
                                      class="racetrack-col"
                                      style={{
                                        width: "3500px",
                                        marginLeft: "47.8571px",
                                      }}
                                    >
                                      <div
                                        class="racetrack-inner"
                                        id="Race_here"
                                      >
                                        <div
                                          class="line-row start"
                                          style={{
                                            width: "837.5px",
                                            minWidth: "837.5px",
                                          }}
                                        >
                                          <div class="line-inner">
                                            <span className="span_div">
                                              <img
                                                alt=""
                                                srcset="https://cdn.Wire NFT.io/statics/play/public/v4/images/race/flag_start.png 1x, https://cdn.Wire NFT.io/statics/play/public/v4/images/race/flag_start.png 2x"
                                                src="https://cdn.Wire NFT.io/statics/play/public/v4/images/race/flag_start.png"
                                                decoding="async"
                                                data-nimg="fixed"
                                                className="Image_style2"
                                              />
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          class="line-row"
                                          title="500"
                                          style={{
                                            width: "837.5px",
                                            minWidth: "837.5px",
                                          }}
                                        >
                                          <div class="line-inner">
                                            <span class="line-location">
                                              500m
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          class="line-row"
                                          title="1000"
                                          style={{
                                            width: "837.5px",
                                            minWidth: "837.5px",
                                          }}
                                        >
                                          <div class="line-inner">
                                            <span class="line-location">
                                              1000m
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          class="line-row"
                                          title="1500"
                                          style={{
                                            width: "837.5px",
                                            minWidth: "837.5px",
                                          }}
                                        >
                                          <div class="line-inner">
                                            <span class="line-location">
                                              1500m
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          class="line-row"
                                          title="2000"
                                          style={{
                                            width: "837.5px",
                                            minWidth: "837.5px",
                                          }}
                                        >
                                          <div class="line-inner">
                                            <span class="line-location">
                                              2000m
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          class="line-row"
                                          title="2500"
                                          style={{
                                            width: "837.5px",
                                            minWidth: "837.5px",
                                          }}
                                        >
                                          <div class="line-inner">
                                            <span class="line-location">
                                              2500m
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          class="line-row"
                                          title="3000"
                                          style={{
                                            width: "837.5px",
                                            minWidth: "837.5px",
                                          }}
                                        >
                                          <div class="line-inner">
                                            <span class="line-location">
                                              3000m
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          class="line-row"
                                          title="3000"
                                          style={{
                                            width: "837.5px",
                                            minWidth: "837.5px",
                                          }}
                                        >
                                          <div class="line-inner">
                                            <span class="line-location">
                                              3500m
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          class="line-row finish"
                                          style={{
                                            width: "837.5px",
                                            minWidth: "837.5px",
                                          }}
                                        >
                                          <div class="line-inner">
                                            <span className="span_div">
                                              <img
                                                alt=""
                                                srcset="https://cdn.Wire NFT.io/statics/play/public/v4/images/race/flag_start.png 1x, https://cdn.Wire NFT.io/statics/play/public/v4/images/race/flag_start.png 2x"
                                                src="https://cdn.Wire NFT.io/statics/play/public/v4/images/race/flag_start.png"
                                                decoding="async"
                                                data-nimg="fixed"
                                                className="Image_style"
                                              />
                                            </span>
                                            <div class="line-finished">
                                              finished
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                <div class="racehorse" id="Racing_div_id">
                                  {isChaling
                                    ? displayEl.map((items, index) => {
                                        return (
                                          <>
                                            <div id="Start_race" class="">
                                              <span className="">
                                                <img
                                                  alt=""
                                                  src={horse}
                                                  decoding="async"
                                                  data-nimg="fixed"
                                                  className="Horse_img"
                                                />
                                              </span>
                                            </div>
                                          </>
                                        );
                                      })
                                    : raceArray?.map((items, index) => {
                                        // console.log("random",items)
                                        return (
                                          <>
                                            <div
                                              id="race-1"
                                              class=""
                                              style={{
                                                marginLeft: `${items.margin}px`,
                                              }}
                                            >
                                              <span className="">
                                                {items.position == 1 ? (
                                                  <img
                                                    alt=""
                                                    src={race1}
                                                    decoding="async"
                                                    data-nimg="fixed"
                                                    className="Horse_img_2 color_first"
                                                  />
                                                ) : items.position == 2 ? (
                                                  <img
                                                    alt=""
                                                    src={race2}
                                                    decoding="async"
                                                    data-nimg="fixed"
                                                    className="Horse_img_2 color_second"
                                                  />
                                                ) : items.position == 3 ? (
                                                  <img
                                                    alt=""
                                                    src={race3}
                                                    decoding="async"
                                                    data-nimg="fixed"
                                                    className="Horse_img_2 color_third"
                                                  />
                                                ) : (
                                                  <img
                                                    alt=""
                                                    src={race}
                                                    decoding="async"
                                                    data-nimg="fixed"
                                                    className="Horse_img_2"
                                                  />
                                                )}
                                              </span>
                                            </div>
                                          </>
                                        );
                                      })}

                                  {isLine && (
                                    <img
                                      src="https://cdn.Wire NFT.io/statics/play/public/v5/images/race/start.png"
                                      alt=""
                                      className="Line_start"
                                    />
                                  )}

                                  {finishLine && (
                                    <img
                                      src="https://cdn.Wire NFT.io/statics/play/public/v5/images/race/start.png"
                                      alt=""
                                      className="Line_last"
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="bx-right auto">
                                    <div class="bx-header stadion">
                                        <div class="header-inner">
                                            <div class="header-title">Stadion Metaverse</div>
                                        </div>
                                    </div>
                                    <div class="bx-content">
                                        <div class="inner-content">
                                            <div class="view-scroll">
                                                <div class="view-bottom">
                                                    <div class="item-button">
                                                        <div class="button-game primary" style={{ height: "40px" }}>
                                                            <div class="btn-position button-game-left" style={{ width: "16px", height: "40px" }}>
                                                            </div>
                                                            <div class="btn-position button-game-content" style={{ height: "40px", paddingRight: "16px", paddingLeft: "16px" }}>
                                                                <div class="content-name">
                                                                    <span class="content-name-title" style={{ fontSize: "18px" }}>Lobby</span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-position button-game-right" style={{ width: "16px", height: "40px" }}>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
