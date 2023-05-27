import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';
import {ObjectFit} from "react-bootstrap"

function CarouselFadeExample({ items }) {
  // console.log("Carousel Items:", items);

  return (
    <Carousel fade className="carousel-container">
      {items.map((item) => (
  
        <Carousel.Item key={item._id}>

            <Link to={`/event/${item._id}`}>  
          <img
            className="d-block w-100"
            
            src={item.image}  // changed here 
            alt={`${item.name}`}
            //With objectFit, the pic won't get distorted. 
            style={{height: "55vh", objectFit: 'fill'}}
            
          />
          <br></br>
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
