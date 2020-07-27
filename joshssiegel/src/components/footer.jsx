import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
    <footer className="main-footer">
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center text-lg-left">
        <p className="social">
          <a href="#" className="external facebook wow fadeInUp">
            <i className="fa fa-facebook" />
          </a>
          <a
            href="#"
            data-wow-delay="0.2s"
            className="external instagram wow fadeInUp"
          >
            <i className="fa fa-instagram" />
          </a>
          <a
            href="#"
            data-wow-delay="0.4s"
            className="external gplus wow fadeInUp"
          >
            <i className="fa fa-google-plus" />
          </a>
          <a href="#" data-wow-delay="0.6s" className="email wow fadeInUp">
            <i className="fa fa-envelope" />
          </a>
        </p>
      </div>
      {/* /.6*/}
      <div className="col-md-6 text-center text-lg-right mt-4 mt-lg-0">
        <p>© 2018 Your name goes here. All rights reserved.</p>
      </div>
      <div className="col-12 mt-4">
        <p className="template-bootstrapious">
          Template by{" "}
          <a href="https://bootstrapious.com/p/bootstrap-carousel">
            Bootstrapious
          </a>{" "}
          &amp; <a href="https://fity.cz/ostrava">Fity</a>
        </p>
        {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
      </div>
    </div>
  </div>
</footer>
    )
    }
    }