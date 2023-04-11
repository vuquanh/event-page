import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample({ items }) {
  console.log("Carousel Items:", items);

  return (

      <Carousel fade>
       
        {items.map((item) => (
         
      
         <Carousel.Item >
            <img
                className="d-block w-100"
              src={`/images/${item._id}.png`}
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
         
       ))}
      </Carousel>

  );
}

export default CarouselFadeExample;
