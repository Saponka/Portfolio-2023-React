import React from 'react';

//imports cv
import resume from "../../assets/Data/FrancoResume.pdf";
import qr from "../../assets/Img/FrancoResume.png"
//qr code antdesign
import { QRCode, Space, theme } from 'antd';
const { useToken } = theme;

const NavBar = () => {

  //const { token } = useToken();
  //const size = 84;

  return (
    <>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-dark bg-dark  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand " href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end "
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Franco Herrera Ruiz</h5>  */}

              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end  pe-3">
                <li className="nav-item">
                  <div id="capa">
                    <div className="controls">
                      <button className="ligth">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-sun"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        </svg>
                      </button>
                      <button
                        className="dark"
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-moon"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                        </svg>
                      </button>
                      <span> Dark Mode</span>
                    </div>
                  </div>
                </li>
                <br />

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#portfolio"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Proyectos
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://saponka.github.io/ColorGame/"
                      >
                        Color Game
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://saponka.github.io/weather-channel/"
                      >
                        Weather Channel
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://comixzoom.herokuapp.com/"
                      >
                        ComixZoom
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://saponka.github.io/ListaTareas/"
                      >
                        Lista de Tareas
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://typer3000.vercel.app/"
                      >
                        Typer 3000
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://video-games-delta.vercel.app/"
                      >
                        Video Games
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://vino-rojo-bodegon.vercel.app/"
                      >
                        Vino Rojo
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://final-react-front.vercel.app/"
                      >
                        Bonzai Tek
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Otras
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <ul>
                  <li className="nav-item">
                    <a
                      download="FrancoResume.pdf"
                      href={resume}
                      className="nav-link active"
                      aria-current="page"
                    >
                      <button type="button" className="btn btn-outline-info">
                        <span className="icon">
                          <i className="fas fa-download"></i>
                        </span>
                        Download CV .pdf
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <p> or Download CV with QR</p>
                    <img src={qr} alt="" width={110} />
                {/* <Space>
                  <QRCode
                    value="https://github.com/Saponka"
                    color={token.colorInfoText}
                    bgColor={token.colorBgLayout}
                    size={size}
                    icon=''
                  />
                </Space> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar
