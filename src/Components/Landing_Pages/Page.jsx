import React from "react";
import "./Page.css";
import video from "../Landing_Pages/video5451614225174637413.mp4";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap');
</style>;

function Page() {
  return (
    <>
        <video autoPlay muted playsInline loop 
        style={{ width: "100%",height: "auto" ,opacity: "1" }}>
          <source src={video} type="video/mp4" />
        </video>
      <div className="page_main">
      {/* <video autoPlay muted playsInline loop
       style={{width: "1241px", height: "auto", opacity: "1"}}>
        <source src={video} type="video/mp4" />
        </video> */}
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          {/* <section id="main"> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="main-text">
                <h1>
                  <span>Harness the Power of Possibility in LaRace</span>
                </h1>
                <p>
                  Welcome to LaRace – where the excitement of horse racing meets
                  the limitless possibilities of the metaverse.
                </p>
                <p>
                  LaRace is not just a game; it's an immersive experience that
                  combines the thrill of virtual horse racing, the innovation of
                  blockchain technology, and the boundless potential of the
                  metaverse.
                </p>
              </div>
            </div>
          </div>
          {/* </section> */}
          <section id="nftservice">
            <h1>
              <span style={{ color: "white" }}>
                Series of LaRace Horses (NFT)
              </span>
            </h1>
            <div class="nftservice-box-container">
              <div
                class="nftservice-box horse pic1 aos-init aos-animate"
                data-aos="flip-left"
              >
                <img class="race_image" src="images/Picture1.png" />
                <div class="box-top">
                  <div class="service">
                    <div class="name-service">
                      <strong>GLEBA</strong>
                    </div>
                  </div>
                </div>
                <div class="service-detail">
                  <p>
                    Gleba series like an earthquake are a very powerful force of
                    nature.
                  </p>
                </div>
              </div>
              <div
                class="nftservice-box horse pic2 aos-init aos-animate"
                data-aos="flip-left"
              >
                <img class="race_image" src="images/Picture2.png" />
                <div class="box-top">
                  <div class="service">
                    <div class="name-service">
                      <strong>WASSER</strong>
                    </div>
                  </div>
                </div>
                <div class="service-detail">
                  <p>
                    The Wasser series are powerful and like flowing water can
                    obliterate anything standing in their way.
                  </p>
                </div>
              </div>
              <div
                class="nftservice-box horse pic3 aos-init aos-animate"
                data-aos="flip-left"
              >
                <img class="race_image" src="images/Picture3.png" />
                <div class="box-top">
                  <div class="service">
                    <div class="name-service">
                      <strong>ZRAK</strong>
                    </div>
                  </div>
                </div>
                <div class="service-detail">
                  <p>
                    Horses within this series are plentiful but like a tornado
                    can travel far and fast.
                  </p>
                </div>
              </div>
              <div
                class="nftservice-box horse pic4 aos-init aos-animate"
                data-aos="flip-left"
              >
                <img class="race_image" src="images/Picture4.png" />
                <div class="box-top">
                  <div class="service">
                    <div class="name-service">
                      <strong>BRANNBIL</strong>
                    </div>
                  </div>
                </div>
                <div class="service-detail">
                  <p>
                    Possesses the ability to destroy and can travel at an
                    unbelievable speed with ferocity.
                  </p>
                </div>
              </div>
              <div
                class="nftservice-box horse pic5 aos-init aos-animate"
                data-aos="flip-left"
              >
                <img class="race_image" src="images/Picture5.png" />
                <div class="box-top">
                  <div class="service">
                    <div class="name-service">
                      <strong>FOUDRE</strong>
                    </div>
                  </div>
                </div>
                <div class="service-detail">
                  <p>
                    The most devastating force is delivered by this series, a
                    lightning Strike destroys anything in its path.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="container">
            <h3
              class="fn__maintitle big"
              data-text="Horse NFT"
              data-align="center"
            >
              Horse NFT
            </h3>
            <div class="fn_cs_slider" data-responsive="on">
              <div class="slider_top">
                <img src="images/one.gif" style={{ height: "450px" }} alt="" />
                <ul>
                  <li class="prev" data-index="1">
                    <div class="item">
                      <img
                        src="images/one.gif"
                        style={{ height: "450px" }}
                        alt=""
                      />
                      <div class="item_in">
                        <div class="img" data-bg-img="images/one.gif"></div>
                      </div>
                    </div>
                  </li>
                  <li class="active" data-index="2">
                    <div class="item">
                      <img
                        src="images/two.gif"
                        style={{ height: "450px" }}
                        alt=""
                      />
                      <div class="item_in">
                        <div class="img" data-bg-img="images/two.gif"></div>
                      </div>
                    </div>
                  </li>
                  <li class="next" data-index="3">
                    <div class="item has_video">
                      <img
                        src="images/three.gif"
                        style={{ height: "450px" }}
                        alt=""
                      />
                      <a
                        class="popup-youtube metaportal_fn_videobutton"
                        href=""
                      >
                        <img
                          src="images/three.gif"
                          style={{ height: "450px" }}
                          alt=""
                          class="fn__svg"
                        />
                      </a>
                      <div class="item_in">
                        <div class="img" data-bg-img="images/three.gif"></div>
                      </div>
                    </div>
                  </li>
                  <li class="next2" data-index="4">
                    <div class="item">
                      <img
                        src="images/four.gif"
                        style={{ height: "450px" }}
                        alt=""
                      />
                      <div class="item_in">
                        <div class="img" data-bg-img="images/four.gif"></div>
                      </div>
                    </div>
                  </li>
                  <li data-index="5">
                    <div class="item">
                      <img
                        src="images/five.gif"
                        style={{ height: "450px" }}
                        alt=""
                      />
                      <div class="item_in">
                        <div class="img" data-bg-img="images/five.gif"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="slider_nav">
                <a href="#" class="prev">
                  <span class="circle"></span>
                  <span class="icon">
                    <img src="svg/down.svg" alt="" class="fn__svg" />
                  </span>
                  <span class="circle"></span>
                </a>
                <a href="#" class="next">
                  <span class="circle"></span>
                  <span class="icon">
                    <img src="svg/down.svg" alt="" class="fn__svg" />
                  </span>
                  <span class="circle"></span>
                </a>
              </div>
            </div>
          </div>

          {/* <section id="about"> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="about-text aos-init aos-animate" data-aos="zoom-in">
                <h1>
                  <span>ABOUT</span> US
                </h1>
                <p>
                  At LaRace, we are passionate about merging the thrilling world
                  of virtual horse racing with NFT trading while embracing the
                  Play2Earn concept. We are a dynamic ecosystem that empowers
                  players to own, breed, and race their very own NFT horses
                  while offering unique opportunities for engagement, earning,
                  and community building.
                </p>
                <p>
                  Our mission is to provide a captivating and immersive
                  experience where players can unleash their racing spirit and
                  embark on a journey of adventure, competition, and personal
                  growth. With cutting-edge blockchain technology, we ensure
                  secure and transparent transactions, allowing players to
                  confidently participate in ownership and trading activities
                  within the LaRace ecosystem.
                </p>
                <p>
                  We are committed to promoting a vibrant and inclusive
                  community of horse racing enthusiasts within the metaverse.
                  Connect with like-minded individuals, share your experiences,
                  and compete against fellow players in exhilarating races. With
                  LaRace, you can forge new friendships, form alliances, and
                  learn from the collective wisdom of the community.
                </p>
              </div>
            </div>
          </div>
          {/* </section> */}

          <section id="nftservice">
            <div className="nftservice-box-container">
              <div
                className="nftservice-box racing_cont aos-init aos-animate"
                data-aos="flip-left"
              >
                <img className="race_img" src="images/pic1.png" />
                <div class="box-top">
                  <div class="service">
                    <div class="name-service">
                      <strong>RACING</strong>
                    </div>
                  </div>
                </div>

                <div class="service-detail">
                  <p>
                    In the world of LaRace, virtual horse racing takes centre
                    stage. Players have the opportunity to become virtual horse
                    owners, train their horses, and compete in exhilarating
                    races against other players. The adrenaline rush of watching
                    your horse sprint towards the finish line, the strategic
                    decisions to be made during the race, and the pride of
                    victory create an immersive and captivating racing
                    experience.
                  </p>
                </div>
              </div>
              <div
                className="nftservice-box racing_cont2 aos-init aos-animate"
                data-aos="flip-left"
              >
                {/* <div className="service-img"> */}
                <img className="race_img" src="images/pic2.png" />
                {/* </div> */}
                <div class="box-top">
                  <div class="service">
                    <div class="name-service">
                      <strong>BREEDING</strong>
                    </div>
                  </div>
                </div>
                <div class="service-detail">
                  <p>
                    As a virtual horse breeder in LaRace, you have the power to
                    shape the future of the racing world. Selecting the most
                    promising stallions and mares, you can strategically pair
                    them to create offspring with desirable traits, strengths,
                    and potential. From choosing the right bloodlines to
                    analysing genetics and characteristics, every decision you
                    make has the potential to produce a remarkable generation of
                    horses.
                  </p>
                </div>
              </div>
              <div
                className="nftservice-box racing_cont3 aos-init aos-animate"
                data-aos="flip-left"
              >
                {/* <div className="service-img"> */}
                <img className="race_img" src="images/renting4.png" />
                {/* </div> */}
                <div class="box-top">
                  <div class="service">
                    <div class="name-service">
                      <strong>RENTING</strong>
                    </div>
                  </div>
                </div>
                <div class="service-detail">
                  <p>
                    For horse owners, renting provides a means to generate
                    income from their prized NFT horses. By making your horses
                    available for rent, you can share their talents, beauty, and
                    abilities with others in the LaRace community. It's a chance
                    to showcase your horses' unique qualities and potentially
                    earn a lucrative return on your investment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="Vision">
            <div class="row">
              <div class="col-lg-12">
                <div class="explore-text">
                  <h1>
                    <span>Our Vision</span>
                  </h1>
                  <p>
                    Our vision at LaRace is to create a dynamic ecosystem where
                    players can not only enjoy immersive gameplay but also earn
                    real income through our Play2Earn model. By actively
                    engaging with the game, participating in races, breeding
                    horses, and trading NFT assets, players have the opportunity
                    to generate income and build their virtual racing empire.
                  </p>
                  <p>
                    Our commitment to sustainability extends to our
                    environmental responsibility, leveraging the power of
                    blockchain to minimize our ecological footprint.
                  </p>
                </div>
              </div>
              <div class="col-lg-12">
                <div
                  class="explore-text explore-img aos-init aos-animate"
                  data-aos="fade-right"
                >
                  <img alt="" className="img_vision" src="images/vision.png" />
                </div>
              </div>
            </div>
          </section>
<br />
<br />
<br />
<br />
<br />
          <section class="how-it-works" id="how_to_play">
            <div class="hiw-heading">
              <h2>Token Distribution and Allocation</h2>
            </div>
            <div class="hiw-image aos-init aos-animate" data-aos="fade-up">
              <img class="img-hiw" src="images/token.png" />
            </div>
          </section>
          <section class="how-it-works" id="how_to_play">
            <div class="hiw-heading">
              <h2>Roadmap</h2>
            </div>
            <div class="hiw-image aos-init aos-animate" data-aos="fade-up">
              <img class="img-hiw" src="images/roadmap.png" />
            </div>
          </section>
          <section class="how-it-works" id="how_to_play">
            <div class="hiw-heading">
              <h2>How to play</h2>
            </div>
            <div class="hiw-image aos-init aos-animate" data-aos="fade-up">
              <img
                class="img-hiw"
                src="https://larace.live/static/media/howitworks.032b6251ac419c6b10fc.png"
              />
            </div>
          </section>
          <section id="feature-wallet">
            <h2>
              ALL <span>WALLET</span> OPTIONS
            </h2>
            <ul id="feature-boxes" class="container cs-hidden ">
              <div class="">
                <li class="item aos-init aos-animate" data-aos="zoom-in">
                  <div class="feature-box">
                    <a href="#">
                      <img src="https://larace.live/static/media/feature-1.a251c90acf15675286ad.png" />
                    </a>
                  </div>
                  <span>Meta Mask</span>
                </li>
              </div>
              <li class="item aos-init aos-animate" data-aos="zoom-in">
                <div class="feature-box">
                  <a href="#">
                    <img src="https://larace.live/static/media/feature-2.9ab198cbe0e6ff131948.png" />
                  </a>
                </div>
                <span>Binance</span>
              </li>
              <li class="item aos-init aos-animate" data-aos="zoom-in">
                <div class="feature-box">
                  <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0x5654f923534f9342e8596124fcde1bd6bfd8e766">
                    <img src="images/dextool.png" />
                  </a>
                </div>
                <span>Dex Tool</span>
              </li>
              <li class="item aos-init aos-animate" data-aos="zoom-in">
                <div class="feature-box">
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0x052775Cf897b3eC894F26b8d801C514123c305D1&inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56">
                    <img src="images/pancake.png" />
                  </a>
                </div>
                <span>Pancake Swap</span>
              </li>
              <li class="item aos-init aos-animate" data-aos="zoom-in">
                <div class="feature-box">
                  <a href="https://poocoin.app/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0x052775Cf897b3eC894F26b8d801C514123c305D1">
                    <img src="images/poocoin.png" />
                  </a>
                </div>
                <span>Poocoin</span>
              </li>
              <li
                class="item trust aos-init aos-animate tst"
                data-aos="zoom-in"
              >
                <div class="feature-box">
                  <a href="#">
                    <img src="images/trustwallet.png" />
                  </a>
                </div>
                <span>Trust Wallet</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Page;
