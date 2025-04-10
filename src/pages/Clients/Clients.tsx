import {Title, StyledLink, ClientsWrapper } from "./styles"

function Users() {
  return (
    <ClientsWrapper>
      <Title>Список 3 крупнейших строительных компаний Германии</Title>
      <StyledLink to='hochtief'>Hochtief</StyledLink>
      <StyledLink to='/clients/hochtief'>Strabag</StyledLink>
      <StyledLink to='/clients/hochtief'>Züblin</StyledLink>
    </ClientsWrapper>
  )
}

export default Users