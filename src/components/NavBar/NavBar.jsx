import React from 'react'

const NavBar = () => {
  return (
    <>
    <html class="has-navbar-fixed-top"></html>
      <nav class="navbar is-transparent is-fixed-top">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
      <img src="https://bulma.io/images/bulma-logo.png" alt="" width="112" height="28"></img>
    </a>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start " id='navItems'>
      <a /* class="navbar-item " */ class="bd-tw-button button" href="/" style={{textDecoration:"none",marginRight:"10px"}}>
        Home
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link bd-tw-button button" style={{textDecoration:"none"}}>
          Projectos
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/" style={{textDecoration: "none"}}>
            Vino Rojo Bodegon
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/" style={{textDecoration: "none"}}>
            Games API
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/" style={{textDecoration: "none"}}>
            Color Game
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/" style={{textDecoration: "none"}}>
            Typer 3000
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/" style={{textDecoration: "none"}}>
            Weather API
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/" style={{textDecoration: "none"}}>
          Lista de Tareas
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/" style={{textDecoration: "none"}}>
            Comix Zoom
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/" style={{textDecoration: "none"}}>
            Bonzai ZenTek
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Github" data-social-action="github" data-social-target="https://github.com" target="_blank" href="https://github.com/Saponka" style={{textDecoration: "none"}}>
              <span class="icon">
              <i class="fa-brands fa-github fa-xl"   ></i>
            
              </span>
              <span>
                GitHub
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-danger" href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip" style={{textDecoration: "none"}}>
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span>Download CV</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar
