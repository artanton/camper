import { useDispatch } from 'react-redux';
import { ContactText, DeleteButton, IconWrapper, PhoneNoItem } from './ContactItemStyled';
import { deleteContact } from 'reduxFiles/cont/operators';
import { FiX } from "react-icons/fi";

export const ContactItem = ({ contact }) => {
  const { name, number } = contact;

  const dispatch = useDispatch();

  const fNumber = formatPhoneNumber(number);

  function formatPhoneNumber() {
    const num = number.toString();
  
    const formattedNo =
      num.slice(0, 3) +
      '-' +
      num.slice(3, 5) +
      '-' +
      num.slice(5, num.length );
    const formattedNumber = formattedNo;
  
    return formattedNumber;}
   

  return (
    <PhoneNoItem>
      <ContactText>
        {name}: {fNumber}
      </ContactText>
      <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>
      <IconWrapper>

       <FiX size="25" />
      </IconWrapper>
      </DeleteButton>
    </PhoneNoItem>
  );
};
