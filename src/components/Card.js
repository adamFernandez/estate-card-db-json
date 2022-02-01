import { StyledCard } from "./Card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../styles/Container.styled";
import { images } from "../images/images";

const Card = ({ item, changeStatus }) => {
  return (
    <Container>
      <div className="status"><div className={`banner ${item.status === "expired" ? 'expired' : ''}`} onClick={() => changeStatus(item)}>{item.status}</div></div>
      <StyledCard>
        <div className="image">
          <img src={images.filter(i => i.id === item.id ? i.src)} alt={item.image.alt} width="50%" />
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
      <div className="message">Click on the card to toggle between active or expired</div>
    </Container>
  );
};

export default Card;
