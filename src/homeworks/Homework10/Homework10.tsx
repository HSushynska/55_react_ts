
import Button from "../../components/Button/Button";
import {Homework10Container, MainButton} from "./styles";

function Homework10() {
    return (<Homework10Container>
        <Button name="SEND" danger ={true}/>
        <MainButton name="DELETE" />
    
        </Homework10Container>
    )
}
export default Homework10;
