import { useDispatch } from 'react-redux';
import notFoundPic from '../../media/pictures/PhotoNotFound.png';
import { getCamper } from 'reduxFiles/camper/operators';

import {
  CamperButton,
  CamperButtons,
  CamperCard,
  CamperCardInfo,
  CamperDescription,
  CamperHeading,
  CamperRate,
  Poster,
  ShowMoreButton,
} from './CamperItemStyled';
import { FavoriteButton } from 'components/FavoriteButton/FavoriteBtn';

export const CamperItem = ({ camper }) => {
  const {
    _Id,
    gallery,
    name,
    price,
    rating,
    location,
    description,
    adults,
    engine,
    transmission,
    reviews,
    details: { kitchen, beds, airConditioner },
  } = camper;

  const dispatch = useDispatch();
  // const isActive = useSelector(state => state.favorites.includes(_Id));

  // const handleToggle = () => {
  //   dispatch(toggleFavorite(_Id));};

  return (
    <CamperCard>
      <Poster
        src={gallery[0] ? `${gallery[0]}` : `${notFoundPic}`}
        alt={name}
      />

      <CamperCardInfo>
        <div>
          <CamperHeading>
            <div>{name}</div>
            <div>
              €{price}{' '}
              <FavoriteButton itemId={_Id}/>
            </div>
          </CamperHeading>
          <CamperRate>
            <span>
              {rating}({reviews.length} Reviews)
            </span>
            <span>{location}</span>
          </CamperRate>
        </div>

        <CamperDescription>{description}</CamperDescription>

        <CamperButtons>
          <span>{adults && <CamperButton>{adults} adults</CamperButton>}</span>

          <span>
            {transmission && (
              <CamperButton>
                {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
              </CamperButton>
            )}
          </span>

          <span>
            {engine && (
              <CamperButton>
                {' '}
                {engine.charAt(0).toUpperCase() + engine.slice(1)}{' '}
              </CamperButton>
            )}
          </span>

          <span>{kitchen && <CamperButton>Kitchen </CamperButton>}</span>

          <span>{beds && <CamperButton>{beds} beds </CamperButton>}</span>

          <span>{airConditioner && <CamperButton> AC </CamperButton>}</span>
        </CamperButtons>

        <ShowMoreButton onClick={() => dispatch(getCamper(camper.id))}>
          <span>Show more</span>
        </ShowMoreButton>
      </CamperCardInfo>
    </CamperCard>
  );
};
