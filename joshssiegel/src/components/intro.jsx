import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
    <section
  id="intro"
  style={{
    background: "url(img/home.jpg) center center no-repeat",
    backgroundSize: "cover"
  }}
  className="intro-section pb-2"
>
  <div className="container text-center">
    <div data-animate="fadeInDown" className="logo">
      <img src="img/logo-big.png" alt="logo" width={130} />
    </div>
    <h1 data-animate="fadeInDown" className="text-shadow mb-5">
      Hello, hola, नमस्ते !
    </h1>
    <p data-animate="slideInUp" className="h3 text-shadow text-400">
      I grind HTML and CSS and then weld them with PHP into beautiful and
      efficient websites.
    </p>
  </div>
</section>

    )
  }
}