import Card from "./Card";

const Listing = ({ data }) => {
  return (
    <>
    {data.map(item => 
      <Card item={item} key={item.id}/>
    )}
    </>
  )
};

export default Listing;
