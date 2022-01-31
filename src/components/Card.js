import { StyledCard } from "./Card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../styles/Container.styled";
// import home from '../images/home1.jpg';

const Card = ({ item }) => {
  return (
    <Container>
      <StyledCard>
        <div className="status">{item.status}</div>
        <div className="image">
          <img src={item.image.src} alt={item.image.alt} width="50%" />
        </div>
        <div className="info">
          <h2 className="title">{item.title}</h2>
          <p className="price">{item.price}</p>
          <div className="rooms">
            <div className="bedrooms">{item.rooms.bedrooms} <FontAwesomeIcon icon="bed" /></div>
            <div className="bathrooms">{item.rooms.bathrooms} <FontAwesomeIcon icon="bath" /></div>
            <div className="livingroom">{item.rooms.livingrooms}<FontAwesomeIcon icon="couch" /></div>
          </div>
          <div className="description">{item.description}</div>
          <div className="address">{item.address}, London, {item.postcode}</div>
        </div>
      </StyledCard>
    </Container>
  );
};

export default Card;
