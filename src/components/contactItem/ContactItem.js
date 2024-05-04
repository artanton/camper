import { useDispatch } from 'react-redux';
import { ContactText, DeleteButton, IconWrapper, PhoneNoItem } from './ContactItemStyled';
import { getCamper} from 'reduxFiles/cont/operators';
import { FiX } from "react-icons/fi";

export const CamperItem = ({ camper }) => {
  const {name, price  } = camper;

  const dispatch = useDispatch();




   

  return (
    <PhoneNoItem>
      <ContactText>
        {name}: {price}
      </ContactText>
      <DeleteButton onClick={() => dispatch(getCamper(camper.id))}>
      <IconWrapper>

       <FiX size="25" />
      </IconWrapper>
      </DeleteButton>
    </PhoneNoItem>
  );
};
