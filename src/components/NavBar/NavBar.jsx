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
      <nav className="navbar navbar-dark fixed-top" style={{boxShadow: "5px 0px 15px #00BCD4",backgroundColor:"rgb(225 83 18)"}}>
        <div className="container-fluid">
          {/* <a className="navbar-brand " href="#">  </a> */}
          <p className='fecha'>  <span>{diasEnString()}</span> <span>{fecha}</span> <span>{meses()}</span> <span>{año}</span></p>
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
            style={{boxShadow: "-1px 0px 7px #00BCD4"}}
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
                  <p style={{color:"rgb(225 83 18)",fontSize:"20px"}}>  Formación</p>
                </li>
              </ul>

        <div class="accordion accordion-flush" id="accordionFlushExample" >
  <div class="accordion-item" style={{backgroundColor:"#e3353f"}}>
    
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        UTN
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"> FullStack Web Developer <br />
      Diplomatura en Python (Cursando) 
       <br />
      
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{backgroundColor:"yellow"}}>
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Soy Henry
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">FullStack Web Developer <br />
      UpSkilling : MicroServicios
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{backgroundColor:"#5454e1"}}>
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Educacion IT
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Maquetador Avanzado CSS,LESS y SASS <br />
      Angular 13
      </div>
    </div>
  </div>
</div>

      {/*         <ul class="list-group">
  <li class="list-group-item">Formacion</li>

  <li class="list-group-item list-group-item-primary">UTN : FullStack Web Developer</li>
  <li class="list-group-item list-group-item-dark">Soy Henry : FullStack Web Developer.</li>
  <li class="list-group-item list-group-item-success">Henry UpSkilling : MicroServicios.</li>
  <li class="list-group-item list-group-item-danger">Educacion IT : Maquetador Avanzado CSS,LESS y SASS.</li>
  <li class="list-group-item list-group-item-light">Educacion IT : Angular 13.</li>

</ul> */}
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
                      <button type="button" className="btn btn-outline-danger">
                        <span className="icon">
                          <i className="fas fa-download"></i>
                        </span>
                        Download CV .pdf
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
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
