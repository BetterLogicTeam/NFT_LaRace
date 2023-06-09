import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Breeding from './MarketPlace/Breeding/Breeding';
import Items from './MarketPlace/Items/Items';
import Marketplace_play_game from './MarketPlace/MarketPlace_play_game/Marketplace_play_game';
import Model_connect from './MarketPlace/Model_connect/Model_connect';
import Pages from './MarketPlace/Pages/Pages';
import Navbar_nav from './MarketPlace/Navbar_market/Navbar_nav'
import Header from './Header/Header';
import About from './About_page/About';
import Game_play from './Game_play/Game_play';
import How_to_play from './How_to_play/How_to_play';
import Tokenomics from './Tokenomics/Tokenomics';
import Our_team from './Meet_our_team/Our_team';
import INVESTORS from './INVESTORS/INVESTORS';
import RoadMap from './RoadMap/RoadMap';
import Finished_race from './MarketPlace/Finished_Race/Finished_race';
import Racing_main from './MarketPlace/Racing/Racing_main';


export default function MarketPlace_Main() {
  const [modalShow, setModalShow] = React.useState(false);
  const [isChangeRoute, setIsChangeRoute] = useState("main")



  return(
    <>

    
<div className="main_div_app">
        <BrowserRouter>
          <Navbar_nav setModalShow={setModalShow} />
          <Routes>
            <Route path="Items" element={<Items />} />
            <Route path="pages" element={<Pages />} />
            <Route path="Marketplace_play_game" element={<Marketplace_play_game />} />
            <Route path="Breeding" element={<Breeding setModalShow={setModalShow} />} />
            <Route path="Racing_main" element={<Racing_main />} />
            <Route path="Finished_race" element={<Finished_race />} />
          </Routes>
        </BrowserRouter>
      </div>
    
    </>
  )


}
