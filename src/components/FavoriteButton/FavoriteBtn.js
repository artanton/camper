import { useState } from 'react';

import { ActiveHeart, Button, NoActiveHeart } from './FavoriteBtnStyled';

export const FavoriteButton = ({ itemId }) => {
        const [isActive, setIsActive] = useState();
        //   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        //   return favorites.includes(itemId);
        // });
      
        const handleToggle = () => {
          setIsActive(prevIsActive => {
            const newIsActive = !prevIsActive;
            // const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      
            // if (newIsActive) {
            //   localStorage.setItem('favorites', JSON.stringify([...favorites, itemId]));
            // } else {
            //   localStorage.setItem(
            //     'favorites',
            //     JSON.stringify(favorites.filter(id => id !== itemId))
            //   );
            // }
      
            return newIsActive;
          });
        };
  
  
    return (
      <Button isActive={isActive} onClick={handleToggle}>
        {isActive ? <ActiveHeart size='24' /> : <NoActiveHeart size='24'/>}
      </Button>
    );
  };
// export const FavoriteButton = ({ itemId }) => {
//     const [isActive, setIsActive] = useState(() => {
//       const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//       return favorites.includes(itemId);
//     });
  
//     const handleToggle = () => {
//       setIsActive(prevIsActive => {
//         const newIsActive = !prevIsActive;
//         const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
//         if (newIsActive) {
//           localStorage.setItem('favorites', JSON.stringify([...favorites, itemId]));
//         } else {
//           localStorage.setItem(
//             'favorites',
//             JSON.stringify(favorites.filter(id => id !== itemId))
//           );
//         }
  
//         return newIsActive;
//       });
//     };
  
//     return (
//       <Button isActive={isActive} onClick={handleToggle}>
//         {isActive ? 'Удалить из избранного' : 'Добавить в избранное'}
//       </Button>
//     );
//   };