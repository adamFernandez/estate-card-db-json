import { useState, useEffect} from "react";


import './FontAwesome';
import { GlobalStyles } from "./styles/Global";
import { Wrapper } from "./styles/Wrapper.styled";
import Listing from "./components/Listing.js";


function App() {

  const [data, setData] = useState(null);

  const changeStatus = (item) => {
    const currentItem = data.find(i => i.id === item.id);
    const newStatus = item.status === 'active' ? 'expired' : 'active';
    setData(
      data.map(i => i.id === item.id
        ? {...currentItem, status: newStatus } 
        : i
      )
    )
  }

  useEffect(() => {
    const url = "http://localhost:3001/properties";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      {data && <Listing data={data} changeStatus={changeStatus} />}
    </Wrapper>
  );
}

export default App;
