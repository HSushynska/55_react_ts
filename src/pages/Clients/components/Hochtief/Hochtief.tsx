import { useNavigate } from 'react-router-dom'

import Button from "../../../../components/Button/Button";
import {HochtiefWrapper, CompanyTitle, Image, ButtonContainer } from "./styles";

function Hochtief() {
  
  const navigate = useNavigate();
  
  const goToClientsPage = ()=>{
    navigate('/clients')
  }

  const goToStrabagPage = ()=>{
    navigate('/clients/strabag')
  }

  const goToZüblinPage = ()=>{
    navigate('/clients/züblin')
  }

  return (
    <HochtiefWrapper>
      <CompanyTitle>Hochtief</CompanyTitle>
      <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Essen-S%C3%BCdviertel_Luft.jpg/1280px-Essen-S%C3%BCdviertel_Luft.jpg' />
      <ButtonContainer>
        <Button name='More about clients' onClick={goToClientsPage} />
        <Button name='About Strabag' onClick={goToStrabagPage}/>
        <Button name='About Züblin' onClick={goToZüblinPage}/>
      </ButtonContainer>
    </HochtiefWrapper>
  )
}

export default Hochtief;