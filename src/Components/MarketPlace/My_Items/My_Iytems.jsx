import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { loadWeb3 } from "../../../apis/api";
import {
  raceContractABI,
  raceContractAddress,
  wireNftContractAbi,
  wireNftContractAddress,
} from "../../../utilies/constant";
import Web3 from "web3";
import "./style.css";

import { toast } from "react-toastify";

export default function My_Iytems({ setModalShow, btnTxt, setshowsell }) {
  let [addtext, setaddtext] = useState("Connect");
  let [imageArray, setImageArray] = useState([]);
  let [initialLimit, setInitialLimit] = useState(0);
  let [finalLimit, setFinalLimit] = useState(12);
  let [mywalletLength, setMyWalletLength] = useState();
  let [pageNumber, setPageNumber] = useState(1);
  let [totalPages, setTotalPages] = useState(1);
  let [Array_NFT, setArray_NFT] = useState([]);

  let nivigating = useNavigate();

  const getAccount = async () => {
    let acc = await loadWeb3();
    console.log("ACC=", acc);
    if (acc == "No Wallet") {
      setaddtext("No Wallet");
    } else if (acc == "Wrong Network") {
      setaddtext("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setaddtext(myAcc);
    }
  };

  const loadMore = () => {
    let a = finalLimit + 6;
    if (a >= mywalletLength) {
      setInitialLimit(initialLimit + 6);
      if (pageNumber < totalPages) {
        setPageNumber(pageNumber + 1);
      }
      console.log("Loading More Up");
      setFinalLimit(mywalletLength);
    } else {
      console.log("Loading More");
      if (pageNumber < totalPages) {
        setPageNumber(pageNumber + 1);
      }
      setInitialLimit(initialLimit + 6);
      setFinalLimit(finalLimit + 6);
    }
  };

  const loadLess = () => {
    let b = finalLimit - 6;

    if (b <= 6) {
      setFinalLimit(6);
      setInitialLimit(0);
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    } else {
      setInitialLimit(initialLimit - 6);
      setPageNumber(pageNumber - 1);
      setFinalLimit(finalLimit - 6);
    }
  };

  const stakeNFT = async (tokenid) => {
    try {
      const acc = await loadWeb3();
      const web3 = window.web3;
      const contractOf = new web3.eth.Contract(
        raceContractABI,
        raceContractAddress
      );
      const nftContract = new web3.eth.Contract(
        wireNftContractAbi,
        wireNftContractAddress
      );
      await nftContract.methods
        .setApprovalForAll(raceContractAddress, true)
        .send({
          from: acc,
        });
      const createBid = await contractOf.methods
        .createBet(tokenid, wireNftContractAddress)
        .send({
          from: acc,
        });
      nivigating("/Items/horse_racing");
      console.log("createBid", createBid);
      toast("Transtion Successfull");
    } catch (e) {
      console.error("error while stake nft", e);
    }
  };
  const Nft_Collection = async () => {
    let acc = await loadWeb3();
    try {
      const web3 = window.web3;
      let Data_Array = [];
      let contractOf_Own = new web3.eth.Contract(
        wireNftContractAbi,
        wireNftContractAddress
      );
      let WalletOwnOf = await contractOf_Own.methods.walletOfOwner(acc).call();
      let wallet_Length = WalletOwnOf.length;
      console.log("walletOfOwner", wallet_Length);
      let Wallet_URI;
      for (let i = 0; i < wallet_Length; i++) {
        let ArryData = WalletOwnOf[i];
        Wallet_URI = await contractOf_Own.methods.tokenURI(ArryData).call();
        console.log("Image", Wallet_URI);
        let res = await axios.get(
          `https://gateway.pinata.cloud/ipfs/QmbV58Sid6aSc2fPAMxfsso6ZtE15YgZr1v2rc78NYuB2P/air horse${
            i + 2
          }.png`
        );
        console.log("Res", res.config.url);
        let Image_Url = res.config.url;
        // let NFT_Name = res.data.title

        Data_Array = [
          ...Data_Array,
          { Tokenid: ArryData, Url: Image_Url, address: acc },
        ];
        setArray_NFT(Data_Array);
      }
      // console.log("Wallet_URI",Wallet_URI);
    } catch (e) {
      console.log("Erroe while Call My_cooletion Fuction", e);
    }
  };

  useEffect(() => {
    Nft_Collection();
  }, []);

  return (
    <div>
      <div className="main_div_app">
        <div class="container">
          <div class="bx-view">
            <div class="bx-full">
              <div class="bx-header">
                <div class="header-inner">
                  <div class="header-tab center">
                    <ul>
                      <li class="">
                        <div class="item-tab">
                          <div class="item-tab-icon">
                            <div className="items_tab_inneree">
                              <img
                                alt=""
                                src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_item.png"
                                decoding="async"
                                data-nimg="fixed"
                                className="items_img_here"
                              />
                              <noscript></noscript>
                            </div>
                          </div>
                          <Link to="/Items/Mint" className="text_de">
                            <span class="item-tab-title">MINT</span>
                          </Link>
                        </div>
                      </li>
                      <li class="active">
                        <div class="item-tab ">
                          <div class="item-tab-icon">
                            <div className="items_tab_inneree">
                              <img
                                alt=""
                                src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_item.png"
                                decoding="async"
                                data-nimg="fixed"
                                className="items_img_here"
                              />
                              <noscript></noscript>
                            </div>
                          </div>
                          <Link to="/Items/My_Items" className="text_de">
                            <span class="item-tab-title active">
                              COLLECTION
                            </span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="bx-content default">
                <div class="inner-content">
                  <div class="viewPega ">
                    <div class="list-pick">
                      {Array_NFT.map((items, idex) => {
                        return (
                          <>
                            <div className="ms-4">
                              <div className="card-container">
                                <a href="/" className="hero-image-container">
                                  <img
                                    className="hero-image"
                                    src={items.Url}
                                    alt="Spinning glass cube"
                                  />
                                </a>
                                <main className="main-content">
                                  <div className="flex-row">
                                    <div className="coin-base">
                                     
                                      <p>Token ID</p>
                                    </div>
                                    <div className="time-left">
                                     
                                      <p>{items.Tokenid}</p>
                                    </div>
                                  </div>
                                </main>
                                <button className="btn-primary "   onClick={() => stakeNFT(items.Tokenid)}>Stake</button>
                               
                              </div>
                            </div>

                            {/* <div class="item-pega">
                              <a href="#">
                                <div class="item-box">
                                  <div class="item-cover">
                                    <div
                                      style={{
                                        display: "block",
                                        overflow: "hidden",
                                        position: "relative",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "block",
                                          boxSizing: "border-box",
                                          paddingTop: "70%",
                                        }}
                                      ></div>
                                      <img
                                        alt=""
                                        src={items.Url}
                                        decoding="async"
                                        data-nimg="responsive"
                                        class="item-cover-img"
                                        className="items_img_here "
                                      />
                                    </div>
                                  </div>
                                  <div class="item-header">
                                    <div class="info-atts">
                                      <div class="info-name">
                                        <div class="item-info-title">
                                          {items.name}
                                        </div>
                                        <div class="item-info-meta">
                                          Token Id
                                        </div>
                                      </div>
                                      <div class="info-adds">
                                        <div class="info-adds-title">
                                          {items.address?.substring(0, 6) +
                                            "..." +
                                            items.address?.substring(
                                              items.address?.length - 6
                                            )}
                                        </div>
                                        <div class="info-property">
                                          <div class="property-title">
                                            <div class="property-coat">
                                              {items.Tokenid}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>

                              <div class="info-action">
                                <div class="action-group">
                                  <div class="item-link">
                                    <div
                                      class="button-game primary"
                                      style={{ height: "32px" }}
                                      onClick={() => stakeNFT(items.Tokenid)}
                                    >
                                      <div
                                        class="btn-position button-game-left"
                                        style={{
                                          width: "16px",
                                          height: "32px",
                                        }}
                                      ></div>
                                      <div
                                        class="btn-position button-game-content"
                                        style={{
                                          height: "32px",
                                          paddingRight: "16px",
                                          paddingLeft: "16px",
                                        }}
                                      >
                                        <div class="content-name">
                                          <span class="content-name-sub"></span>
                                          <span
                                            class="content-name-title"
                                            style={{ fontSize: "20px" }}
                                          >
                                            STAKE
                                          </span>
                                        </div>
                                        <div class="button-game-icon i-right"></div>
                                      </div>
                                      <div
                                        class="btn-position button-game-right"
                                        style={{
                                          width: "16px",
                                          height: "32px",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </>
                        );
                      })}
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
