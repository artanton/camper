// import { createSelector } from '@reduxjs/toolkit';

export const selectCamper = state => state.camp.campers;

// export const selectFilter = state => state.filt.filter;

export const selectIsLoading = state => state.camp.isLoading;

export const selectError = state => state.camp.error;

// export const selectSearchedContacts = createSelector(
//   [selectContact, selectFilter],
//   (storeContacts, searchedContact) => {
//     return storeContacts.filter(contact => {
//       const fitContact = contact.name
//         .toLowerCase()
//         .includes(searchedContact.toLowerCase());
//       return fitContact;
//     });
//   }
// );
