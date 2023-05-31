import React from 'react';
import weather from "../../assets/Img/proyectos/weather channel.png";
import toDoList from "../../assets/Img/proyectos/Lista de Tareas.png";
import colorGame from "../../assets/Img/proyectos/colorete.png";
import aVenture from "../../assets/Img/proyectos/a-venture.png";
import resto from "../../assets/Img/proyectos/resto.png";
import comix from "../../assets/Img/proyectos/comixZoom.png";
import vinoRojo from "../../assets/Img/proyectos/vinoRojo.png";
import typer from "../../assets/Img/proyectos/typer3000.png";
import bonzai from "../../assets/Img/proyectos/bonzayTek.png";
import videoGames from "../../assets/Img/proyectos/videoGames.png";

const Projectos = () => {
  return (
    <div>
          <section class="content-section  text-center" >
       {/*  <img src="https://i.makeagif.com/media/6-19-2017/CPX3Jc.gif" alt=""></img> */}
        <div class=" px-4 px-lg-5 text-center" id="callout">
            <h1  class="mx-auto mb-5">
                Bienvenido a <br/> 
                Mis Proyectos  
            </h1>  
        </div>
    </section>
      <section className="content-section p-5" id="portfolio">
        <div className="container px-4 px-lg-5">
            
            <div className="row ">
                <div className="col-lg-6">
                    <a className="portfolio-item link-dark" target="blank" href="https://saponka.github.io/weather-channel/">
                        <div className="caption">
                            <div className="caption-content ">
                                <div className="h2">Weather Channel</div>
                                <p className="mb-0 ">Aplicacion del Clima</p>
                            </div>
                        </div>
                        <img className="img-fluid" src={weather} alt="..." />
                    </a>
                </div>
                <div className="col-lg-6">
                    <a className="portfolio-item link-dark" target="blank" href="https://saponka.github.io/ListaTareas/">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">To do List</div>
                                <p className="mb-0">Lista de Tareas</p>
                            </div>
                        </div>
                        <img className="img-fluid" src={toDoList} alt="..." />
                    </a>
                </div>

                <div className="col-lg-6">
                    <a className="portfolio-item link-dark" target="blank" href="https://saponka.github.io/ColorGame/">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">Color Game</div>
                                <p className="mb-0">Adivina el Color RGB </p>
                            </div>
                        </div>
                        <img className="img-fluid" src={colorGame} alt="..." />
                    </a>
                </div>
                <div className="col-lg-6">
                    <a className="portfolio-item link-dark" target="blank" href="https://saponka.github.io/A-Ventures/">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">A-Ventures</div>
                                <p className="mb-0">Elige tu Propia Aventura</p>
                            </div>
                        </div>
                        <img className="img-fluid" src={aVenture} alt="..." />
                    </a>
                </div>
                <div className="col-lg-6">
                    <a className="portfolio-item link-dark" target="blank" href="https://saponka.github.io/restaurante/">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">Resto</div>
                                <p className="mb-0">Theme Page de Restaurant</p>
                            </div>
                        </div>
                        <img className="img-fluid" src={resto} alt="..." />
                    </a>
                </div>
                <div className="col-lg-6">
                    <a className="portfolio-item link-dark" target="blank" href="https://comixzoom.vercel.app/">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">Comix Zoom</div>
                                <p className="mb-0">Fan Page de Comics</p>
                            </div>
                        </div>
                        <img className="img-fluid" src={comix} alt="..." />
                    </a>
                </div>
                </div>
                </div>
    </section>

    <section className="content-section p-5" id="portfolio">
        <div className="container px-4 px-lg-5">
            <div className="content-section-heading text-center " id='callout'>
                
                <h1  className="mb-5">Proyectos Recientes</h1>
            </div>
            <div className="row ">
                <div className="col-lg-6">
                    <a className="portfolio-item link-dark" target="blank" href="https://typer3000.vercel.app/">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">Typer 3000</div>
                                <p className="mb-0">Juego de Tiempo y Palabras</p>
                            </div>
                        </div>
                        <img className="img-fluid" src={typer} alt="..." />
                    </a>
                </div>
                <div className="col-lg-6">
                    <a className="portfolio-item link-dark" target="blank" href="https://final-react-front.vercel.app/">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">Bonzai Tek</div>
                                <p className="mb-0">App MERN Gestion de Datos</p>
                                <p className="mb-0">Mongo Express React NodeJs</p>
                            </div>
                        </div>
                        <img className="img-fluid " src={bonzai} alt="..." />
                    </a>
                </div>
         
        
                <div className="col-lg-6">
                    <a className="portfolio-item link-dark" target="blank" href="https://video-games-delta.vercel.app/">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">Video Games</div>
                                <p className="mb-0">Api Rest de Video Juegos</p>
                                <p className="mb-0">Postgres React NodeJs Express</p>
                            </div>
                        </div>
                        <img className="img-fluid" src={videoGames} alt="..." />
                    </a>
                </div>
         
                <div className="col-lg-6">
                    <a className="portfolio-item link-dark" target="blank" href="https://vino-rojo-bodegon.vercel.app/">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">Vino Rojo Bodegon</div>
                                <p className="mb-0">Ecommerce Gastronomico</p>
                                <p className="mb-0">Mongo Express React NodeJs</p>
                            </div>
                        </div>
                        <img className="img-fluid" src={vinoRojo} alt="..." />
                    </a>
                </div>
            </div>
        </div>
    </section>       
    </div>
  )
}

export default Projectos;
