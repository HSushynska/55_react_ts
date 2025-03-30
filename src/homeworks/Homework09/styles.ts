import styled from "@emotion/styled";

interface BoxInfoStyledProps {
    primary?: boolean
  }
  
  export const BoxInfo = styled.div<BoxInfoStyledProps>`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 30px;
   width: ${({ primary }) => primary ? '350px' : '300px'};
   height: ${({ primary }) => primary ? '350px' : '300px'};
   background-color: ${({ primary }) => primary ? '#eeb011' : '#b7e51a'};
   font-size: 20px;
   `;
  
  export const TitleCard = styled.h2`
   color: #481ae5;
   font-size: 30px;
  `
  

  
  

  
 