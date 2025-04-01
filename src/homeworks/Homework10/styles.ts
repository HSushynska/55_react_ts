import styled from "@emotion/styled";
import Button from "../../components/Button/Button";


export const Homework10Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
flex: 1;
padding: 60px;
background-color: rgb(188, 219, 219);
`



// Расширение компонентов (наследование)
export const MainButton = styled(Button)`
 box-shadow: 3px 3px 10px rgb(95, 74, 74);
 background-color: rgb(224, 15, 29);
 color: rgb(95, 74, 74)`

