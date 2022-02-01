import Card from "./Card";

const Listing = ({ data, changeStatus }) => {
  return (
    <>
    {data.map(item => 
      <Card key={item.id} item={item} changeStatus={changeStatus} />
    )}
    </>
  )
};

export default Listing;
