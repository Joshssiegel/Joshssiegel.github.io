import React, { Component } from 'react'

export default class Testimonials extends Component {
  render() {
    return (
    <section id="testimonials" className="testimonials-section bg-gray">
  <div className="container">
    <header className="text-center mb-2">
      <h2 data-animate="fadeInUp" className="title">
        My customers said
        <br />
        <span>about me</span>
      </h2>
      <p data-animate="fadeInUp" className="lead">
        I am always glad to hear that my customers leave satisfied. Some of them
        shared with you their insights on our cooperation.
      </p>
    </header>
    <ul
      data-animate="fadeInUp"
      className="owl-carousel owl-theme testimonials equalize-height"
    >
      <li className="item">
        <div className="testimonial full-height">
          <div className="text">
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin. He lay on
              his armour-like back, and if he lifted his head a little he could
              see his brown belly, slightly domed and divided by arches into
              stiff sections.
            </p>
          </div>
          <div className="bottom">
            <div className="icon">
              <i className="fa fa-quote-left" />
            </div>
            <div className="name-picture">
              <img alt src="img/person-1.jpg" />
              <h5>John McIntyre</h5>
              <p>CEO, TransTech</p>
            </div>
          </div>
        </div>
      </li>
      <li className="item">
        <div className="testimonial full-height">
          <div className="text">
            <p>
              The bedding was hardly able to cover it and seemed ready to slide
              off any moment. His many legs, pitifully thin compared with the
              size of the rest of him, waved about helplessly as he looked.
              "What is happened to me? " he thought. It was not a dream.
            </p>
          </div>
          <div className="bottom">
            <div className="icon">
              <i className="fa fa-quote-left" />
            </div>
            <div className="name-picture">
              <img alt src="img/person-2.jpg" />
              <h5>John McIntyre</h5>
              <p>CEO, TransTech</p>
            </div>
          </div>
        </div>
      </li>
      <li className="item">
        <div className="testimonial full-height">
          <div className="text">
            <p>
              His room, a proper human room although a little too small, lay
              peacefully between its four familiar walls. A collection of
              textile samples lay spread out on the table - Samsa was a
              travelling salesman - and above it there hung a picture that he
              had recently cut out of an illustrated magazine and housed in a
              nice, gilded frame.
            </p>
          </div>
          <div className="bottom">
            <div className="icon">
              <i className="fa fa-quote-left" />
            </div>
            <div className="name-picture">
              <img alt src="img/person-3.jpg" />
              <h5>John McIntyre</h5>
              <p>CEO, TransTech</p>
            </div>
          </div>
        </div>
      </li>
      <li className="item">
        <div className="testimonial full-height">
          <div className="text">
            <p>
              It showed a lady fitted out with a fur hat and fur boa who sat
              upright, raising a heavy fur muff that covered the whole of her
              lower arm towards the viewer. Gregor then turned to look out the
              window at the dull weather. Drops of rain could be heard hitting
              the pane, which made him feel quite sad.
            </p>
          </div>
          <div className="bottom">
            <div className="icon">
              <i className="fa fa-quote-left" />
            </div>
            <div className="name-picture">
              <img alt src="img/person-4.jpg" />
              <h5>John McIntyre</h5>
              <p>CEO, TransTech</p>
            </div>
          </div>
        </div>
      </li>
      <li className="item">
        <div className="testimonial full-height">
          <div className="text">
            <p>
              It showed a lady fitted out with a fur hat and fur boa who sat
              upright, raising a heavy fur muff that covered the whole of her
              lower arm towards the viewer. Gregor then turned to look out the
              window at the dull weather. Drops of rain could be heard hitting
              the pane, which made him feel quite sad. Gregor then turned to
              look out the window at the dull weather. Drops of rain could be
              heard hitting the pane, which made him feel quite sad.
            </p>
          </div>
          <div className="bottom">
            <div className="icon">
              <i className="fa fa-quote-left" />
            </div>
            <div className="name-picture">
              <img alt src="img/person-4.jpg" />
              <h5>John McIntyre</h5>
              <p>CEO, TransTech</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>

    )
    }
    }