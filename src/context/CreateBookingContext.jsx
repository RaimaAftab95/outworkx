import { createContext, useReducer } from 'react';

export const CreateBookingContext = createContext();

const initialState = {
  booking: null,
  isLoading: false,
  error: null
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'BOOKING_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'BOOKING_SUCCESS':
      return {
        ...state,
        booking: action.payload.booking,
        isLoading: false
      };
    case 'BOOKING_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case 'CLEAR_BOOKING':
      return {
        ...state,
        booking: null,
        error: null
      };
    default:
      return state;
  }
};

export const CreateBookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <CreateBookingContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateBookingContext.Provider>
  );
};
