import React from "react";
import { Carousel } from "react-bootstrap";
import "../../../Styles/Banner.css";
const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://media.istockphoto.com/photos/happy-best-friends-having-fun-on-a-kayaks-kayaking-on-the-river-picture-id1256457327?b=1&k=20&m=1256457327&s=170667a&w=0&h=FD5pEZkMCLEYx_U2FiNcwFXBWg9vueO33o1bFq44Nv4="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Travel & Tours</h3>
            <p>Travel around the world and know yourself</p>
            <button className="carousel-btn">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://media.istockphoto.com/photos/small-boy-and-girl-looking-at-river-with-magnifier-picture-id1287882633?b=1&k=20&m=1287882633&s=170667a&w=0&h=aIT3o0BFtJ5vO8pwtDd5ot1cKcepmWGMaVbGytAj1LQ="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Experience Once In Your Life Time</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
            <button className="carousel-btn">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>International Tour Management.</h3>
            <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>
            <button className="carousel-btn">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
