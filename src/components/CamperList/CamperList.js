import { useSelector } from 'react-redux';
import {CamperItem} from '../camperItem/CampertItem';

import { selectCamper } from 'reduxFiles/camper/selectors';
import { CamperListStyle } from './CamperListStyled';

export const CamperList = () => {
  const campers = useSelector(selectCamper);
  
  return (
    <CamperListStyle>
      {campers.map(camper => {
        return (
          <li key={camper.id}>
            <CamperItem camper={camper} />
          </li>
        );
      })}
    </CamperListStyle>
  );
};
