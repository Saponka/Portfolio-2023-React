import React from 'react';
import "./navbar.css"
//imports cv
import resume from "../../assets/Data/FrancoResume.pdf";
import qr from "../../assets/Img/FrancoResume.png"


const NavBar = () => {

  const fecha= new Date().getDate();
  const año = new Date().getFullYear();
function diasEnString (){
  let dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
  const day = new Date().getDay();
  return dias[day]
}
function meses(){
  let meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  const mes = new Date().getMonth();

  return meses[mes]
}


  return (
    <>
      <nav className="navbar navbar-dark fixed-top" style={{boxShadow: "5px 0px 15px #00BCD4",backgroundColor:"black"}}>
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
            style={{boxShadow: "-3px 0px 10px #00BCD4"}}
          >
            <div className="offcanvas-header">
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
                  <p className='fecha'>  <span>{diasEnString()}</span> <span>{fecha}</span> <span>{meses()}</span> <span>{año}</span></p>
                </li>
                <br/>
                <div className="container px-4 px-lg-5 mb-1 social">
                    <a
                      className=" rounded-circle text-white "
                      target="blank"
                      href="https://www.instagram.com/frankoherreraruiz/?hl=es-la"
                    >
                      <i class="fa-brands fa-instagram  fa-2xl" style={{color:" #f0056b"}}></i>
                    </a>
                    <a
                      className="rounded-circle text-white "
                      target="blank"
                      href="https://www.linkedin.com/feed/"
                    >
                      <i class="fa-brands fa-linkedin  fa-2xl" style={{color:"#075ef2"}}></i>
                    </a>
                    <a
                      className=" rounded-circle text-white"
                      target="_blank"
                      href="https://github.com/Saponka"
                    >
                      <i class="fa-brands fa-github fa-2xl "  /* style={{color:"purple"}} */></i>
                    </a>
                </div>
                 <br />
                <li className="nav-item dropdown">
                   <a
                    className="nav-link dropdown-toggle "
                    href="#portfolio"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    
                   >
                    Formacion
                   </a>
                   <ul className="dropdown-menu "aria-labelledby="offcanvasNavbarDropdown">
                    <li>
                      UTN : FullStack Web Developer.
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                    Soy Henry : FullStack Web Developer.
                    </li>
                    <li>
                     Henry UpSkilling : MicroServicios.
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      Educacion IT : Maquetador Avanzado CSS,LESS y SASS.
                    </li>
                    <li>
                     Educacion IT : Angular 13.
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
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
                    <img src={qr} alt="" width={150} />
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
