import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
            <ul className="list-inline mb-5">
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3"target="blank" href="https://www.instagram.com/?hl=es-la"><i className="icon-social-instagram"></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" target="blank"href="https://www.linkedin.com/feed/"><i className="icon-social-linkedin"></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white" target="blank" href="https://github.com/Saponka"><i className="icon-social-github"></i></a>
                </li>
            </ul>
            <p id="foot" className=" small mb-0" > Franco Herrera Ruiz 2023</p>
        </div>
    </footer>
    </>
  )
}

export default Footer
