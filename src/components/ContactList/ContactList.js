import { useSelector } from 'react-redux';
import {CamperItem} from '../contactItem/ContactItem';
import { PhoneNoList } from './ContactListStyled';
import { selectSearchedContacts } from 'reduxFiles/cont/selectors';

export const CamperList = () => {
  const actualCampers = useSelector(selectSearchedContacts);
  
  return (
    <PhoneNoList>
      {actualCampers.map(camper => {
        return (
          <li key={camper.id}>
            <CamperItem camper={camper} />
          </li>
        );
      })}
    </PhoneNoList>
  );
};
