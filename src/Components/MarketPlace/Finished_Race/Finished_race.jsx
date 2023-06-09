import axios from "axios";
import React from "react";
import { useState } from "react";

import { useQueries } from "@tanstack/react-query";


import "./Finished_race.css";

import Spinner from "../../Loading_Spinner/Spinner";
import moment from "moment";
import { useSelector } from "react-redux";
export default function Finished_race() {
    const value = useSelector((state) => state.connectWallet.acc)
 
    console.log("value",value);
  const [SingleUser, setSingleUser] = useState(false);



  const [postsQuery, usersQuery] = useQueries({
    queries: [
      {
        queryKey: ["posts"],
        queryFn: () =>
          axios
            .get(
              `https://larace.archiecoin.online/history?address=${value}`
            )
            .then((res) => res.data),
      },

      {
        queryKey: ["users"],
        queryFn: () =>
          axios.get("https://larace.archiecoin.online/history").then((res) => res.data),
      },
    ],
  });
    if (usersQuery.isLoading) return (
        <>
        <Spinner/>
        </>
    );


  return (
    <div>
     

      <div className="main_div_app">
        <div class="container">
          <div class="bx-view">
            <div class="bx-left">
              <div class="bx-header">
                <div class="header-inner">
                  <div class="header-title"></div>
                  <div class="header-tab">
                    <ul>
                      {SingleUser == true ? (
                        <>
                          <li class="" onClick={() => setSingleUser(false)}>
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
                              <a class="item-tab-title">Race History</a>
                            </div>
                          </li>
                          <li
                            class="active"
                            onClick={() => setSingleUser(true)}
                          >
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
                              <a class="item-tab-title"> User Details</a>
                            </div>
                          </li>
                        </>
                      ) : (
                        <>
                          <li
                            class="active"
                            onClick={() => setSingleUser(false)}
                          >
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
                              <a class="item-tab-title">Race History</a>
                            </div>
                          </li>
                          <li class="" onClick={() => setSingleUser(true)}>
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
                              <a class="item-tab-title"> User Details</a>
                            </div>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="bx-content default">
                <div class="inner-content">
                  <div class="viewTable">
                    <div class="tableHeader">
                      {/* <div class="header-title event first"><span>Event</span></div> */}
                      <div class="header-title location">
                        <span>S.No</span>
                      </div>
                      <div class="header-title location">
                        <span>User Address</span>
                      </div>
                      <div class="header-title distance">
                        <span>Position</span>
                      </div>

                      <div class="header-title distance">
                        <span>Reward</span>
                      </div>
                      <div class="header-title date">
                        <span>Date</span>
                      </div>
                      {/* <div class="header-title prizepool"><span>Prizepool</span></div>
                                            <div class="header-title action end"><span>Action</span></div> */}
                    </div>
                    <div class="tableContent">
                      {/* {
                        usersQuery.isLoading  ? 
                          <>
                           
                            <Spinner />
                          </>
                          :
                          <></>
                      } */}
                        
                      {SingleUser == true ? (
                        <>
                          {postsQuery?.data?.map((items, index) => {
                             let dateTime = moment(Number(items.time)).format(
                              "DD-MM-YYYY"
                            );
                            console.log("dateTimeTop", dateTime);

                            return (
                              <>
                                {usersQuery.isLoading  ? (
                                  <>
                                   
                                    <Spinner />
                                  </>
                                ) : (
                                  <>
                                    <div class="item-content">
                                      <div class="item-title distance">{index+1}</div>
                                      <div class="item-title location">
                                        {items.userAddress?.substring(0, 7) +
                                          "..." +
                                          items.userAddress?.substring(
                                            items.userAddress?.length - 7
                                          )}
                                      </div>
                                      
                                      <div class="item-title distance">
                                        {items.position}
                                      </div>

                                      <div class="item-title distance">
                                        {items.reward}
                                      </div>
                                      <div class="item-title date">
                                        {dateTime}
                                      </div>

                                     
                                    </div>
                                  </>
                                )}
                              </>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          {usersQuery?.data?.map((items,index) => {
                            let dateTime = moment(Number(items.time)).format(
                              "DD-MM-YYYY"
                            );

                            return (
                              <>
                                {usersQuery.isLoading  ? (
                                  <>
                                    <Spinner />
                                  </>
                                ) : (
                                  <>
                                    <div class="item-content">
                                      <div class="item-title event first">{index+1}</div>
                                      <div class="item-title location">
                                        {items.userAddress?.substring(0, 7) +
                                          "..." +
                                          items.userAddress?.substring(
                                            items.userAddress?.length - 7
                                          )}
                                      </div>
                                     
                                      <div class="item-title distance">
                                        {items.position}
                                      </div>

                                      <div class="item-title distance">
                                        {items.reward}
                                      </div>
                                      <div class="item-title date">
                                        {dateTime}
                                      </div>

                                     
                                    </div>
                                  </>
                                )}
                              </>
                            );
                          })}
                        </>
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
  );
}
