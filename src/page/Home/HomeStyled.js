import vanForHomePage from '../../media/background/camper.jpg';
import styled from 'styled-components';

export const Container = styled.div`
margin: 0 auto;
  min-height: calc(100vh - 50px);
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.3)
    ),
    url(${vanForHomePage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${p => p.theme.padding.medium};
  font-family: ${p => p.theme.font.mainFont};
`;

export const PageTitle = styled.h1`
  font-weight: 700;
  color: ${p => p.theme.colors.hText};
  font-size: 32px;
  text-align: center;
  margin-bottom: 80px;
`;

export const SubTitle = styled.h3`
  color: ${p => p.theme.colors.hText};
  font-weight: ${p => p.theme.fontWeight.big};
  font-size: ${p => p.theme.fontSize.big};

  text-align: center;
  margin-bottom: 10px;
`;

export const MainText = styled.div`
  color: ${p => p.theme.colors.hText};
  font-weight: ${p => p.theme.fontWeight.medium};
  text-align: center;
  margin-bottom: 74px;
  max-width: 600px;
`;
