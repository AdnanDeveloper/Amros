import React, { Component } from "react";


class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg ">
                    <div class="container ">
                        <img src="img/amros.jpg" alt="logo" class="width-18"></img><a class="navbar-brand" href=""></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li class="nav-item ">
                                    <a class="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About Me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">My Work</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                            <a href="https://wa.link/d68v13" target="_blank"><button class="btn nav-btn" type="submit">Call Now</button></a>
                        </div>
                    </div>
                </nav>

                <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container">
  <img src="img/amros.jpg" alt="logo" class="width-18"></img><a class="navbar-brand" href=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body ">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li class="nav-item ">
                                    <a class="nav-link" aria-current="page" href="#home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">About Me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#service">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#work">My Work</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                            <a href="https://wa.link/d68v13" target="_blank"><button class="call-btn nav-btn" type="submit">Get A Quote</button></a>
      </div>
    </div>
  </div>
</nav>
            </div>
        )
    }
}
export default Header
