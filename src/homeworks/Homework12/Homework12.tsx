import axios from "axios";
import { useState } from "react";

import Button from "../../components/Button/Button";
//import CatImg from "../../assets/cat.jpg";  // <img src={CatImg} alt="D I" />
import { Homework12Container, FactWrapper, Error } from "./styles";


function Homework12() {
  const [fact, setFact] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const FACT_URL: string = "https://catfact.ninja/fact";

  const getFact = async () => {
    setError(undefined)
    try {
      const response = await axios.get(FACT_URL);
      console.log(response.data);
      setFact(`${response.data.fact}`)
    } catch (error: any) {
      console.log(error.message);
      setError(error.message)
    } finally {
      console.log("Результат получен");
    }
  };
  return (
    <Homework12Container>
      <Button name="GET MORE FACTS" onClick={getFact} />
      <FactWrapper>{fact}</FactWrapper>
      <Error>{error}</Error>
    </Homework12Container>
  );
}

export default Homework12;
