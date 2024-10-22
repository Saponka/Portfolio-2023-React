import React from 'react'
import node from "../../assets/Img/svg/nodejs-icon-logo-svgrepo-com.svg"
import mysql from "../../assets/Img/svg/mysql-logo-svgrepo-com.svg"
import mongo from "../../assets/Img/svg/mongodb-svgrepo-com.svg"
import react from "../../assets/Img/svg/react-svgrepo-com.svg"
import less from "../../assets/Img/svg/less-svgrepo-com.svg"
import sass from "../../assets/Img/svg/sass-svgrepo-com.svg"
import computer from "../../assets/Img/svg/computer-coding-svgrepo-com.svg"
import angular from "../../assets/Img/svg/angular-icon-logo-svgrepo-com.svg"
import bootstrap  from "../../assets/Img/svg/bootstrap-fill-svgrepo-com.svg"

import "./tecnologias.css"


const Experiencia = () => {
  return (
    <>
      
      <section className="content-section  text-white text-center p-5" id="services">
        <div className="container px-4 px-lg-5">
            <div className="content-section-heading">
                <h2 className="mb-5">Tecnologias</h2>
            </div>
            <div className="row gx-4 gx-lg-5 p-5">
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                    <span ><img src={node} alt=""/></span>
                    <h4><em> Node JS</em></h4>
                    <p className="text-faded mb-0"> Entorno de código abierto, ejecuta JavaScript fuera del navegador.</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                    <span ><img src={mysql} alt=""/></span>
                    <h4><em>MySQL</em></h4>
                    <p className="text-faded mb-0">
                       Base de Datos Relacionales</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                    <span ><img src={mongo} alt=""/></span>
                    <h4><em>MongoDB</em></h4>
                    <p className="text-faded mb-0">Base de datos NoSQL, orientado a documentos </p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                    <span ><img src={computer} alt=""/></span>
                    <h4><em>FrontEnd</em></h4>
                    <p className="text-faded mb-0">HTML5, CSS3, JS </p>
                </div>
            </div>
            <div className="row gx-4 gx-lg-5 p-5">
                <div className="col-lg-3 col-md-6">
                    <span ><img src={bootstrap} alt=""/></span>
                    <h4><em>Bootstrap</em></h4>
                    <p className="text-faded mb-0">Desarrollo web de un modo más sencillo y rápido.</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <span ><img src={less} alt=""/><img src={sass} alt=""/></span>
                    <h4><em>Less</em> y <em>Sass</em></h4>
                    <p className="text-faded mb-0">Pre-Procesadores CSS.</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <span ><img src={angular} alt=""/></span>
                    <h4><em>Angular</em></h4>
                    <p className="text-faded mb-0">Frameworks de apps web desarrollado en TypeScript que se utiliza para crear SPA.</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <span ><img src={react} alt=""/></span>
                    <h4><em>React</em></h4>
                    <p className="text-faded mb-0"> Biblioteca JS para crear interfaces de usuario,desarrollo SPA.</p>
                </div>
            </div>
            <div className="content-section-heading">
                <h2 className="mb-1 mt-5">Estrategias y buenas prácticas</h2> <br />
                 <h5 className='mt-3'>Nombres descriptivos</h5> 
                <p>Utilizar nombres de variables, funciones y clases que sean descriptivos y claros.</p> <br />
                <h5 className=' mb-1'>Revisión de código</h5> 
               <p> Revisiones entre pares para garantizar que el código cumpla con lo establecido.</p> <br />
                <h5 className=' mb-1'>Refactorización constante</h5> 
                <p>Simplificar lógicas complejas mediante refactorización del código.</p> <br />
                <h5 className=' mb-1'>Divide and Conquer</h5> 
                <p>Dividir un problema en problemas más pequeños y manejables.</p> <br />
                <h5 className=' mb-1'>Versionado del código</h5> 
                <p>Utilizar sistemas de control de versiones como Git para rastrear y gestionar cambios en el código.</p>
            

                


            </div>
          </div>
        
    </section>
    </>
  )
}

export default Experiencia
