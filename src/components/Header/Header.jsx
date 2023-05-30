import React from 'react';

const Header = () => {
  return (
    <>
      <div id="banner">
        <img src="./img/ocean-g177104987_1920.jpg" alt=""></img>
        <div >
            <h1 >Franco Herrera Ruiz</h1>
            <h2 ><em>Programador Web FullStack</em></h2>
            <a class="btn btn-success btn-xl boton" href="#portfolio">Proyectos</a>
            {/* <!-- Acerca de mi --> */}
      <section class="content-section  text-dark text-center  p-5" id="AcercaDeMi" >
        <div class="container px-4 px-lg-5  text-center">
            <div id="foto">
                <img src='../src/assets/Img/perfil.png' alt=""></img>
            </div><br/>
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div >
                    
                    <p class="lead mb-5" >
                    Mi nombre es Franco Herrera Ruiz naci en Río Cuarto, Córdoba, Argentina.<br/>
                    Actualmente soy Desarrollador FullStack y Chef Profesional.<br/>
                    Despues de 10 años de ejercer en gastronomia me anime a dar un cambio en mi vida que me llevo a elegir la programacion como mi nueva vocacion.<br/>
                    Realice una Diplomatura en la UTN de FullStack developer y recientemente me gradue del Bootcamp de Soy Henry en FullStack.<br/>
                    Mi meta es continuar en mi formacion como programador, para acceder y manejar diferentes lenguajes.<br/>
                    Considero que siempre hay algo para hacer y aprender ante un desafio.
                    </p>
                    <a class="btn btn-dark btn-xl boton" href="#services">Experiencia</a>
                </div>
            </div>
        </div>
      </section>
      
        </div>
      </div>
    </>
  )
}

export default Header;
