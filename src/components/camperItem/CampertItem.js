import { useDispatch } from 'react-redux';
import notFoundPic from '../../media/pictures/PhotoNotFound.png';
import { getCamper } from 'reduxFiles/camper/operators';
import { FiX } from 'react-icons/fi';
import { CamperCard, CamperCardInfo, CamperHeading, Poster } from './ContactItemStyled';

export const CamperItem = ({ camper }) => {
  const {
    _id,
    gallery,
    name,
    price,
    rating,
    location,
    description,
    adults,
    engine,
    transmission,
    kitchen,
    beds,
    AC,
  } = camper;

  const dispatch = useDispatch();

  return (
    
      <CamperCard>
      <Poster
          src={gallery[0]?
            `${gallery[0]}`
            :`${notFoundPic}`}
           
          alt={name}
        />

        <CamperCardInfo>
        <CamperHeading>
        <span>{name}</span>
         <span>€{price}</span>
      </CamperHeading>

      <p>
        {description}
      </p>

      <div>
        
      </div>

      <buton onClick={() => dispatch(getCamper(camper.id))}>
        <span>
         Show more
        </span>
      </buton>

        </CamperCardInfo>

    
      
    </CamperCard>

    
    
  );
};
