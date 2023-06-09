import React, { useState } from "react";
import "./Mint_race.css";
import zan from "../../Assest/gameplay-thumbnail2.png";
import Collection from "./Collection";
import Racing from "./Racing";
import Racing_HorseMain from "./Racing";
export default function Mint_Race() {

  const [collection, setcollection] = useState(0);
  const [Racing, setRacing] = useState(false);
  const [active, setactive] = useState(false);

  const handleButtonClick = (newData) => {
    setcollection(newData);
  };
  return (
    <div>
      <div className="imagePool">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center pt-5 pb-3">
            <div className="col-lg-2 col-md-3 col-4 d-flex justify-content-start">
              <span id="presale-back">
                <a href="/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="icon-rea"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "white" }}
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" />
                  </svg>
                </a>{" "}
                Back
              </span>
            </div>
            <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-end">
              <button className="btn poolbtn">Connect</button>
            </div>
          </div>
          <div className="row d-flex justify-content-center justify-content-around">
            <div className="col-lg-3 staking-box">
              <div>
                <div className="row d-flex justify-content-center mt-3 mb-3">
                  <a
                  style={{textDecoration: "none"}}
                    aria-current="page"
                    className={collection==0? "col-10  staking-btn_active":"col-10  staking-btn"}
                  
                    
                  >
                    <div className="">
                      <div className="d-grid gap-2">
                        <button
                          className="btn  text-start d-flex align-items-center"
                          style={{
                            // color: "rgb(253, 80, 67)",
                            fontSize: 18,
                            fontWeight: "bold",
                          }}
                          onClick={() => handleButtonClick(0)}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAA0lBMVEUAAACHzuj0niEZXIbzmyD3t0D+vkD1nyLynSD7u0CHz+kZXYW/s3yHzecYWoWHy+fvnyDPqk4pbZSHz+mGz+khZYxfenCIzekZXIaHzucaW4XznSAZW4YYXIMZXIWHzun9vUD0niF5wNz/14LGuII1bITFuIOMmYNvioRSdHTEpVE0eJ7fwWr///8nZIXd8fmW1OyiwbZgg4RSe4Tix4P4wG/p9vvS7PdEc4SboYPS7fed1+3858dXm7z74bomapFfipBEc4WoqYOLmYO1r3f2sEp+SzGvAAAAHnRSTlMAv7+/QCC/n2BA3994YGBAIO/fz8/Pz6+voJ+AcED7XPcgAAAA7UlEQVQ4y7XPZ2/CMBCA4bTQFSilLXtcGAkOmJXB3uv//yXkmHxwCOeAxPvhdIoeKT4lUPxVqKyE9VkX+pCj9UhEb14BtAyg9xrrS0SjE4r8wlE6zkpalpVkSzoU8b41Tfvh632oWor9eigX4/1RSrNsKaR8kwKAjofacFXlghIYSlwQYAhuIJMQk08EtZpNnc8noQ09dllbyj73DcPgU0Crhh92nR96ne26ADN3jz7ccByAnTNF0ZQQAJuYKLJ1HeCgzwC5Dik6+lfVBpqqZhQtQo+h4Xi8kKJBrzeIgiby303mQyl6/Lrii7T8GdrueER0ZUkBAAAAAElFTkSuQmCC"
                            width="10%"
                            className="side_bar_imges"
                          />
                          &nbsp;&nbsp; Mint
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="row d-flex justify-content-center mt-3 mb-3">
                  <a
                  style={{textDecoration: "none"}}
                     className={collection==1? "col-10  staking-btn_active":"col-10  staking-btn"}
             
                  >
                    <div className="">
                      <div className="d-grid gap-2">
                        <button
                          className="btn text-start d-flex align-items-center"
                          style={{
                            // color: "rgb(253, 80, 67)",
                            fontSize: 18,
                            fontWeight: "bold",
                            
                          }}
                          onClick={() => handleButtonClick(1)}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAn1BMVEUAAACHz+mHz+kYXIMYW4SHzuqHx+d2tcqFzeiFy+cVVYWHzumIz+kZXIOHzeeGzOmKyur///+Hzun/14LS7fcZXIXh8/mowdFwmbJShKP/9eDG1+FTe4RvmbOpwtL/8NHj6/Cl0M//5rDx9fiv3vHU4ej//fjp7NyauMpZd3G75PPU4On/+Oi3zNmMrsJ+o7v/6bn/4aH/2Yo1aH2Zkl7wJxJzAAAAEXRSTlMAn79AoO8gz5BAGM+vkGBQMIoEhRgAAADQSURBVDjLxdTXDoIwFIBhxYm7BWRUBQQU3Ov9n81DEwKm03jhf9svbXLSnFaVaWBeRr9VN8OCeg0F9xxsthTj4QdaIjYb47YIJUdEiAq5PnIcV45o/o+IeLRcB13kyKddEcoSIYpc2pmZk84wRx1oEMf7oGrHoqkDraxGjxODugyytjoolKN7CAWIg4onoOZDPPQqNBD0FbohKNuURcJh0jmuHUj86VwPinRQpkARgRIFosdEiqq0UO6XEQmq+zeaYJwqV4+pXmLQfMwlxgLO3imhSX2oX/U4AAAAAElFTkSuQmCC"
                            width="10px"
                            className="side_bar_imges"
                          />
                          &nbsp;&nbsp; Collection
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="row d-flex justify-content-center mt-3 mb-3">
                  <a
        style={{textDecoration: "none"}}
                    className={collection==2 ? "col-10  staking-btn_active":"col-10  staking-btn"}
                  >
                    <div className="">
                      <div className="d-grid gap-2">
                        <button
                          className="btn text-start d-flex align-items-center"
                          style={{
                            // color: "rgb(253, 80, 67)",
                            fontSize: 18,
                            fontWeight: "bold",
                          }}
                          onClick={() => handleButtonClick(2)}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAn1BMVEUAAAD9vUAZWob9vUD8vED7u0D8vED3t0D/vULOxIMZXYWclF6UkGD+vkD+vUA0aHwaXIf8vED6ukD9vUCHzukZXIWLjWLSq02nmVrhsUnvt0RugGsnYoE1aH1gpcXEpVG7x5/CxpSZkl+nmVmdy8mzx6nJxIpEbnhSdHNgem/fwWp9hmd9h2agmmS2n1b1vkqVzNTRw3+LjGOZk17uv1WYyEMSAAAAE3RSTlMAgF+fYEC/IB/v39/Pv6+Af1AwC6ZmZQAAAP9JREFUOMu10Nd2wjAQBNAI25DeVsKSkhgXek37/2+LszlmycpreGGe75lZ6eJ4etcnGNM7qxkMnpM4ViqK7u9uBKOAYs3tCabqd5hd8T7ON6aCfkfPWGudmQ1AJJsPNNkUkWBggkZPAFSLmaeI8hplWueImPEwfEW11JglQBz0LF4aVfyaAgCeeM/Wve3V9/RqB3US1mONbRQl4e8atqhLMo8jYCpEyruyXanDrXQNTIWmzspyFRpI/f+75txg3MwfKo+GIwD7uVcLMkylVdO1pa2wa/Z31xf2SMr7kv1P6+KajKxgVZKRu9wITbdyD5IhhVuy4kZWZGRFRlaC+QGtMy79AEZmJAAAAABJRU5ErkJggg=="
                            width="10px"
                            className="side_bar_imges"
                          />
                          &nbsp;&nbsp; Racing
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-11 mb-md-1 mb-4 mt-4">
              <div className="row d-flex justify-content-center mt-4 mb-5">
                <div className="col-lg-12 col-11 presale-box1">
                  <div className="d-flex justify-content-center">
                    {/* <img
                      src="data:image/png;base64,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"
                      className="mint-image"
                    /> */}

                    <h1 className=" mint-image">{collection == 0 ? 'MINT' : collection == 1 ? "Collection" : "Racing"}</h1>
                  </div>

                    {collection == 0 ? (<>
                      <div className="row d-flex justify-content-center mt-1 mb-2">
                    <div className="col-md-11 col-11 mint-boxs  pb-4 mb-5">
                      <div className="row d-flex justify-content-center m-3">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-3 mb-3">
                          <img src="./images/three.gif" id="mint-pic" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                          <div className=" d-flex justify-content-center justify-content-around align-items-center mt-4">
                            <a style={{ cursor: "pointer" }}>
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgB7ZexCsIwFEXfTSrWoboIgovg5O4POflf/o7grJuoIAoOSgerNn0mdVGEllKbguRsgZDDfSGEC9LwdNyITp0+YvYhpaCKUIjD1iY8YrF4wEhvh/awSuE7TKya2/NaXHdBz5bUAIKMBp2+kL4XkGXAaFpL+iHWqWsRG5zYiZ34Z3h5G8AyEKxGVIAEcsVQIZURC6gRiGdUhCSekMQ881yqidzECcsVQScogvCW+velUuLXXWWP7Quo3C3uHTuxE/+BmJVKqAYEe4jIMqbKCL972dtMbVxpf0oXuj/RKejdubpWYYRmuv7msjel7QkrYVphwtnZMgAAAABJRU5ErkJggg==" />
                            </a>
                            <div className="boxess d-flex justify-content-center align-items-center">
                              1
                            </div>
                            <a style={{ cursor: "pointer" }}>
                              {" "}
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEuSURBVHgB7ZfBSsNAEIbn36Q0HmIvQiE9CB69+gy+hyefS9/DV+jVq1QxKPRg6cFYm/3dWUiN4mERsik0HwQmu8l87GzYMBAHry9G1XJSYMsMSWKkI2ps10eL9Svm80+o9OPl+KxLYRsK6/Hj24N5f8qnsaQKBEl1OilMkqW5RAbEONpKf4jdqnsRK4N4EP/9kuUsJe/1si6Wf3B4pU5DHzRE0cQwUgjp45GgIMFmzoJlSL5wsdi73Q2/xwHeojVgBecSwP6XekO5bGJ30M4Syo3GtZWrGvLczBmE5QsvtcEuOSz1pPeotD0XnE96Yv/3uI11pbUi/usN3dPfDD+JQdydmLU7e3oRp6gkMtrKmOxkVcZctbp8/+RvXP8ky3y6YXddhQq1utliVWrT9gWP9W1RGcb/rQAAAABJRU5ErkJggg==" />
                            </a>
                          </div>
                          <div className=" d-flex justify-content-center align-items-center mt-lg-3 mt-3">
                            <button className="btn mintbtn12 ">MINT</button>
                          </div>
                          <span className="mintspan23 pt-lg-4 pt-3">
                            MAXIMUM OF 3 NFTs CARD PER tx
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                    </>) : collection==1? <><Collection /></>:<><Racing_HorseMain /></>}

                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
