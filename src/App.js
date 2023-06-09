import { Details } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { loadWeb3 } from './apis/api'
import Header from './Components/Header/Header'
import Index_Main from './Components/Index_Main'
import Finished_race from './Components/MarketPlace/Finished_Race/Finished_race'
import Mint from './Components/MarketPlace/Mint/Mint'
import My_Iytems from './Components/MarketPlace/My_Items/My_Iytems'
import Navbar_nav from './Components/MarketPlace/Navbar_market/Navbar_nav'
import Horse_Racing from './Components/MarketPlace/Racing/Horse_Racing'
import Race_Finished from './Components/MarketPlace/Racing/Race_Finished'
import Racing_main from './Components/MarketPlace/Racing/Racing_main'
import { getWallet } from './redux/redux/actions/actions';
import Privacy_Policy from './Components/Privacy Policy/Privacy_Policy'
import Cookie_Policy from './Components/Cookie Policy/Cookie_Policy'
import Terms_and_Conditions from './Components/Terms and Conditions/Terms_and_Conditions'
import Mint_Race from './React_Components/Mint_Race/Mint_Race'


export default function App() {

  let dispatch = useDispatch();

  let [btnTxt, setBtTxt] = useState("Connect Metamask")

  const getAccount = async () => {
    // dispatch(getWallet());
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtTxt("No Wallet")
    }
    else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network")
    } else {
      // let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4)
      setBtTxt(acc);

    }
  }


  useEffect(() => {
    getAccount()
    dispatch(getWallet());
  }, [])


  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Index_Main />} />
          <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
          <Route path="/Cookie_Policy" element={<Cookie_Policy />} />
          <Route path="/Terms_and_Conditions" element={<Terms_and_Conditions />} />
          <Route path="/Mint_Race" element={<Mint_Race />} />




          <Route path="Items" element={<Navbar_nav />} >
            <Route path="/Items/Mint" element={<Mint />} />
            <Route exact path="/Items/Details/:id" element={<Details />} />
            <Route path="/Items/Racing_main" element={<Racing_main />} />
            <Route path="/Items/Finished_race" element={<Finished_race />} />
            <Route path="/Items/My_Items" element={<My_Iytems />} />
            <Route path="/Items/horse_racing" element={<Horse_Racing />} />
            <Route path="/Items/Race_Finished" element={<Race_Finished />} />
            
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  )
}
