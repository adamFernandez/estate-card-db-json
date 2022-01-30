import { useState, useEffect} from "react";


import { Wrapper } from "./styles/Wrapper.styled";
import { Container } from "./styles/Container.styled";
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
      <Container card>
        {data && <Listing data={data} />}
      </Container>
    </Wrapper>
  );
}

export default App;
