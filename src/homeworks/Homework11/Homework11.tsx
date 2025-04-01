import { ChangeEvent, useEffect, useState } from "react";

import { InputContainer, Homework11Container, Result } from "./styles";
import Input from "../../components/Input/Input";

function Homework11() {
  const [exampleValue, setExampleValue] = useState<string>("");
  const [showCountClick, setShowCountClick] = useState<number>(-1);
  const [count, setCount] = useState<number>(0);


  const changeExampleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setExampleValue(event.target.value);
  };

  const plusCount = () => {
    setCount((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    setShowCountClick((prevValue) => prevValue + 1)
  }, [count]);


  return (
    <Homework11Container>
      <Result>{count}</Result>
      <InputContainer>
        <Input
          name="example"
          value={exampleValue}
          placeholder="placeholder"
          onChange={changeExampleValue}
          onClick={plusCount}
        />
        <Input
          name="example"
          value={exampleValue}
          placeholder="placeholder"
          onChange={changeExampleValue}
        />
      </InputContainer>
      <Result>Вы кликнули на кнопку {showCountClick === -1? '0' : showCountClick} раз</Result>
    </Homework11Container>
  );
}

export default Homework11;
