
import Button from "../../components/Button/Button";
import {Homework10Container, MainButton} from "./styles";

function Homework10() {
    return (<Homework10Container>
        <Button name="SEND" />
        <Button name="DELETE" danger ={true} />
    
        </Homework10Container>
    )
}
export default Homework10;
