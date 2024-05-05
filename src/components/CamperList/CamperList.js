import { useSelector } from 'react-redux';
import {CamperItem} from '../camperItem/CampertItem';

import { selectCamper } from 'reduxFiles/camper/selectors';

export const CamperList = () => {
  const campers = useSelector(selectCamper);
  
  return (
    <ul>
      {campers.map(camper => {
        return (
          <li key={camper.id}>
            <CamperItem camper={camper} />
          </li>
        );
      })}
    </ul>
  );
};
