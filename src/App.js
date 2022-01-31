import { useState, useEffect} from "react";

import './FontAwesome';
import { GlobalStyles } from "./styles/Global";
import { Wrapper } from "./styles/Wrapper.styled";
import Listing from "./components/Listing";


function App() {

  const [data, setData] = useState(null);

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
      {data && <Listing data={data} />}
    </Wrapper>
  );
}

export default App;
