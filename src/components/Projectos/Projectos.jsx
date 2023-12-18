import React from 'react';
import "./projectos.css";
import itemData from "../../assets/Data/projectData.js";

const Projectos = () => {
  return (
    <>
        <section className="content-section  text-center" >
             <div className=" px-4 px-lg-5 text-center" id="callout">
                 <h1  className="mx-auto mb-5">
                Bienvenido a <br/> 
                Mis Proyectos  
                </h1>  
             </div>
       </section>
       <section className="content-section p-5" id="portfolio">
        <div className="container px-4 px-lg-5">
              <div className="row " >
                   {itemData.items.map((project,id)=>(
                 <div className="col-lg-6 p-3 " key={id} >
                      <a className="portfolio-item link-dark" target="blank" href={project.url}>
                          <div className="caption">
                              <div className="caption-content " >
                                   <div className="h2" >{project.name}</div>
                                     <p className="mb-0 " >{project.description}</p>
                             </div>
                         </div>
                         <img className="img-fluid" src={project.img} alt="..." />
                     </a>
               </div> 
               
            ))}
            
           </div>
           
      </div>   
       
       
    </section> 
    <section className="content-section p-5" id="portfolio">
    <div className="container px-4 px-lg-5" id="callout">
          <h1 >APIS</h1>
              <div className="row " >
                   {itemData.apis.map((apis,id)=>(
                 <div className="col-lg-6 p-3 " key={id} >
                      <a className="portfolio-item link-dark" target="blank" href={apis.url}>
                          <div className="caption" >
                              <div className="caption-content " >
                                   <div className="h2" >{apis.name}</div>
                                     <p className="mb-0 " >{apis.description}</p>
                             </div>
                         </div>
                         <img className="img-fluid" src={apis.img} alt="..."  />
                     </a>
               </div> 
               
            ))}
           </div>   
      </div>   
      </section>  
    <section className="content-section p-5" id="portfolio">
    <div className="container px-4 px-lg-5" id="callout">
          <h1 >Juegos</h1>
              <div className="row " >
                   {itemData.games.map((game,id)=>(
                 <div className="col-lg-6 p-3 " key={id} >
                      <a className="portfolio-item link-dark" target="blank" href={game.url}>
                          <div className="caption" >
                              <div className="caption-content " >
                                   <div className="h2" >{game.name}</div>
                                     <p className="mb-0 " >{game.description}</p>
                             </div>
                         </div>
                         <img className="img-fluid" src={game.img} alt="..."  />
                     </a>
               </div> 
               
            ))}
           </div>   
      </div>   
      </section>  
    </>
  )
}

export default Projectos;
