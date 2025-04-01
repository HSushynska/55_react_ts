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
 box-shadow: 3px 3px 10px rgb(227, 14, 14);
 background-color: rgb(161, 103, 108);
 color: rgb(58, 168, 98)`

