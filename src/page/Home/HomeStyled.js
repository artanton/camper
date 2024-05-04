import vanForHomePage from '../../media/background/camper.jpg';
import styled from 'styled-components';


export const Container = styled.div`
  
  min-height: calc(100vh - 50px);
    max-width: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, 
      rgba(255, 255, 255, 1),   
      rgba(255, 255, 255, 0.5),   
      rgba(255, 255, 255, 1)),  url(${vanForHomePage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-color: rgba(255, 255, 255, 0.3); 
    padding: 20px;
    font-family: ${p => p.theme.font.mainFont};
`;

export const PageTitle=styled.h1`

      font-weight: 700;
      color: ${p => p.theme.colors.hText};
      font-size: 32px;
      text-align: center;
      margin-bottom: 80px;
`;

export const SubTitle = styled.h3`
     text-align: center;
      margin-bottom: 10px;
     
      color: ${p => p.theme.colors.hText};
      font-weight: 600;
      font-size: 24px;

`;

export const MainText = styled.div`

color: ${p => p.theme.colors.hText};
      text-align: center;
      font-weight: 500;
      margin-bottom: 74px;
      max-width: 600px;
`;
