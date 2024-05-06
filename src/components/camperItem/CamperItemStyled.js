import styled from 'styled-components';


export const CamperCard = styled.div`
  max-width: 888px;
  border: 1px solid  ;
  border-color: ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.borderRad.medium};
  padding: ${p => p.theme.padding.medium};
  font-family: ${p => p.theme.font.mainFont};

  display: flex;

  gap: ${p => p.theme.gap.medium};
`;

export const Poster = styled.img`
  max-width: 290px;
  border: none;
  border-radius: ${p => p.theme.borderRad.small};
 
`;

export const CamperCardInfo = styled.div`
  max-width: 526px;

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.gap.medium};
`;

export const CamperHeading = styled.div`
  display: flex;
  justify-content: space-between;
    color: ${p => p.theme.colors.hText};
  font-weight: ${p => p.theme.fontWeight.big};
  font-size: ${p => p.theme.fontSize.big};
  line-height: 1.25;
  margin-bottom: 8px;
`;

export const CamperRate = styled.p`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
    color: ${p => p.theme.colors.hText};
  font-weight: ${p => p.theme.fontWeight.small};
  font-size: ${p => p.theme.fontSize.small};
  line-height: 1.5;
`;

export const CamperDescription = styled.p`
  
  
  color: ${p => p.theme.colors.plainText};
  font-weight: ${p => p.theme.fontWeight.small};
  font-size: ${p => p.theme.fontSize.small};
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
  line-height: 1.5;
`;

export const CamperButtons = styled.div`
  
  display: flex;
  flex-wrap: wrap;
 
  gap: ${p => p.theme.gap.small};
  
`;

export const CamperButton = styled.button`
  padding: 12px 18px;
  border: none;
  border-radius: 24px;
  color: ${p => p.theme.colors.hText};
  font-weight: ${p => p.theme.fontWeight.big};
  font-size: ${p => p.theme.fontSize.small};
  background-color:  ${p => p.theme.colors.lightGray};
  
  display: flex;
  white-space: nowrap; 
  line-height: 1.25;
  
`;

export const ShowMoreButton = styled.button`
  padding: 16px 40px;
  border: none;
  border-radius: 24px;
  color: ${p => p.theme.colors.actionBtnText};
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSize.small};
  background-color:  ${p => p.theme.colors.actionBtn};

   max-width: 166px;                    
  
  line-height: 1.5;
  
`;






