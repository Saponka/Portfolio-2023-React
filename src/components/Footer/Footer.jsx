import React from 'react';
import "./footer.css";


const Footer = () => {

  const date = new Date();

  return (
    <>
      <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
            {<ul className="list-inline mb-5">
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3"target="blank" href="https://www.instagram.com/?hl=es-la"> <i class="fa-brands fa-instagram  fa-xl" style={{color:" #f0056b"}}></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" target="blank"href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin fa-xl" style={{color:"#075ef2"}}></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="social-link rounded-circle "  target="blank" href="https://github.com/Saponka"><i class="fa-brands fa-github fa-xl " id='github'  /* style={{color:"white"}} */></i></a>
                </li>
            </ul>}
            <p id="foot" className=" small mb-0" > Franco Herrera Ruiz {date.getFullYear()}</p>
        </div>
    </footer>
    </>
  )
}

export default Footer
