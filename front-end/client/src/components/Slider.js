
import React from 'react'
import slider

function Slider() {
  return (
    <div>
      <div className="slider-detail">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="/slide-02.jpg"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className=" bounceInDown">Donate Blood &amp; Save a Life</h5>
            <p className=" bounceInLeft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              justo neque, <br />
              aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu
              metus, mattis <br />
              sed sagittis at, sagittis quis neque. Praesent.
            </p>
            <div className=" vbh">
              <div className="btn btn-success  bounceInUp">
                {" "}
                Book Appointment{" "}
              </div>
              <div className="btn btn-success  bounceInUp"> Contact US </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="slide-03.jpg"
            alt="Third slide"
          />
          <div className="carousel-caption vdg-cur d-none d-md-block">
            <h5 className=" bounceInDown">Donate Blood &amp; Save a Life</h5>
            <p className=" bounceInLeft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              justo neque, <br />
              aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu
              metus, mattis <br />
              sed sagittis at, sagittis quis neque. Praesent.
            </p>
            <div className=" vbh">
              <div className="btn btn-danger  bounceInUp"> Donate Now </div>
              <div className="btn btn-danger  bounceInUp"> Contact US </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
      
    </div>
  );
}

export default Slider;