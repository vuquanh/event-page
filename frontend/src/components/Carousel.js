import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';


function CarouselFadeExample({ items }) {
  console.log("Carousel Items:", items);

  return (
    <Carousel fade className="carousel-container">
      {items.map((item) => (
  
        <Carousel.Item>
            <Link to={`/event/${item._id}`}> 
          <img
            className="d-block w-100"
            src={`/images/${item._id}.png`}
            alt="First slide"
            style={{borderRadius: "20px"}}
          />
          </ Link>
          {/* <Carousel.Caption>
            <h2 style={{color: "red"}}>{item.name}</h2>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>

  );
}

export default CarouselFadeExample;