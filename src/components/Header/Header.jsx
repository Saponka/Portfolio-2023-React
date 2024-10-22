import React from "react";
import perfil from "../../assets/Img/perfil.png";
import "./header.css";


const Header = () => {
  return (
    <>
      <div id="banner">
        <div className="divNombre" id="AcercaDeMi">
          <h1 className="nombre animate__animated animate__slideInLeft animate__delay-1s ">Franco Herrera Ruiz</h1>
          <h2 className="animate__animated animate__lightSpeedInLeft animate__delay-1s animate__slow">
            <em className="subtitulo ">Programador Web FullStack</em>
          </h2>
        </div>
        <div id="foto" style={{ display: "flex" }}>
          <img id="imgfoto" src={perfil} alt="" className=" animate__animated animate__lightSpeedInLeft animate__delay-2s"></img>
        </div>
        <br />
      </div>
      <section className="content-section text-dark text-center  p-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div>
            <h2 className="lead mb-5 descripcion ">
              Soy Franco Herrera Ruiz de Río Cuarto, Córdoba, Argentina.
              <br />
              Considero que siempre hay problemas y soluciones para aprender ante un
              desafio
              <br /> 
              continuar con la formacion es fundamental, para poder acceder y manejar diferentes lenguajes y tecnologias.
              <br />
              Mi meta es desarrollar código entendible, extensible, escalable y reusable 
              <br /> 
              lo que es esencial para mantener un proyecto de software saludable a lo largo del tiempo.
              
              <br />   
            </h2>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
