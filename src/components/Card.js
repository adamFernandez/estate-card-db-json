import { StyledCard } from "./Card.styled";
// import home from '../images/home1.jpg';

const Card = ({ item }) => {
  // const imagePath = `../images/${item.image.src}`;
  // const image = require(imagePath);
  return (
    <StyledCard>
      <div className="status">{item.status}</div>
      <div className="image">
        <img src={item.image.src} alt={item.image.alt} width="50%" />
      </div>
      <div className="info">
        <h2>Guide Price</h2>
        <p className="price">{item.price}</p>
        <div className="rooms-info">
          <div className="bedrooms">{item.rooms.bedrooms} bedroom</div>
          <div className="bathrooms">{item.rooms.bathrooms} bathroom</div>
          <div className="livingroom">{item.rooms.livingrooms}living room</div>
        </div>
        <div className="description">{item.description}</div>
        <div className="address">{item.address}, London, {item.postcode}</div>
      </div>
    </StyledCard>
  );
};

export default Card;
