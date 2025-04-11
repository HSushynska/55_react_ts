import Message from "../Message/Message";
import { CardTitle, CardWrapper } from "./styles";



function Card() {
    
  return (
    <CardWrapper>
      <CardTitle>Card</CardTitle>
      <Message/>
    </CardWrapper>
  );
}

export default Card;
