import React from 'react';
import weather from "../../assets/Img/proyectos/weather channel.png";

const Projectos = () => {
  return (
    <div>
      <section className="content-section p-5" id="portfolio">
        <div className="container px-4 px-lg-5">
            <div className="content-section-heading text-center">
                
                <h2 className="mb-5" >Proyectos</h2>
            </div>
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
                        <img className="img-fluid" src="./img/proyectos/Lista de Tareas.png" alt="..." />
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
                        <img className="img-fluid" src="./img/proyectos/colorete.png" alt="..." />
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
                        <img className="img-fluid" src="./img/proyectos/a-venture.png" alt="..." />
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
                        <img className="img-fluid" src="./img/proyectos/resto.png" alt="..." />
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
                        <img className="img-fluid" src="./img/proyectos/comixZoom.png" alt="..." />
                    </a>
                </div>
                </div>
                </div>
    </section>

    <section className="content-section p-5" id="portfolio">
        <div className="container px-4 px-lg-5">
            <div className="content-section-heading text-center">
                
                <h2 className="mb-5">Proyectos Recientes</h2>
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
                        <img className="img-fluid" src="./img/proyectos/typer3000.png" alt="..." />
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
                        <img className="img-fluid " src="./img/proyectos/bonzayTek.png" alt="..." />
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
                        <img className="img-fluid" src="./img/proyectos/videoGames.png" alt="..." />
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
                        <img className="img-fluid" src="./img/proyectos/vinoRojo.png" alt="..." />
                    </a>
                </div>
            </div>
        </div>
    </section>       
    </div>
  )
}

export default Projectos
