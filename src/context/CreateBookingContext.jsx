// import { createContext, useReducer } from 'react';

// export const CreateBookingContext = createContext();

// const initialState = {
//   booking: null,
//   isLoading: false,
//   error: null
// };

// const bookingReducer = (state, action) => {
//   switch (action.type) {
//     case 'BOOKING_REQUEST':
//       return {
//         ...state,
//         isLoading: true,
//         error: null
//       };
//     case 'BOOKING_SUCCESS':
//       return {
//         ...state,
//         booking: action.payload.booking,
//         isLoading: false
//       };
//     case 'BOOKING_FAILURE':
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload.error
//       };
//     case 'CLEAR_BOOKING':
//       return {
//         ...state,
//         booking: null,
//         error: null
//       };
//     default:
//       return state;
//   }
// };

// export const CreateBookingContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(bookingReducer, initialState);

//   return (
//     <CreateBookingContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CreateBookingContext.Provider>
//   );
// };

import { createContext, useReducer } from 'react';

export const CreateBookingContext = createContext();

/**
 * @typedef {Object} Booking Booking Entity
 * @property {string} spaceId Space ID
 * @property {string} startDate Booking start date
 * @property {string} endDate Booking end date
 * @property {number} price Total booking price
 * @property {number} numberOfDesks Number of desks booked
 * @property {string} status Booking status
 */

/** @type {Booking | Object} */
const initialState = {};

export function createBookingReducer(state, action) {
  switch (action.type) {
    case 'SET_BOOKING_DETAILS':
      return {
        ...state,
        spaceId: action.payload.spaceId,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        price: action.payload.price,
        numberOfDesks: action.payload.numberOfDesks,
        status: action.payload.status
      };
    default:
      return state;
  }
}

export function CreateBookingContextProvider({ children }) {
  const [state, dispatch] = useReducer(createBookingReducer, initialState);

  console.log('Booking context state', state);

  return (
    <CreateBookingContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateBookingContext.Provider>
  );
}
