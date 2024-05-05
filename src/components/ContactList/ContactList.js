import { useSelector } from 'react-redux';
import {CamperItem} from '../contactItem/ContactItem';

import { selectContact } from 'reduxFiles/cont/selectors';

export const CamperList = () => {
  const campers = useSelector(selectContact);
  
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
