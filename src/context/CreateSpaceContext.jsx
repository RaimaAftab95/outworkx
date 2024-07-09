import { createContext, useReducer } from 'react';

export const CreateSpaceContext = createContext();

/**
 * @typedef {Object} Space
 * @property {string} name
 * @property {string} description
 * @property {string} numberOfDesks
 * @property {string} pricePerDesk
 * @property {string} maximumNumberOfNomads
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} zipCode
 * @property {string} country
 * @property {Array} gallery
 * @property {Array} amenities
 * @property {Array} rules
 * @property {Array} availability
 */

/** @type {Space} */
const initialState = {
  space: {
    name: '',
    description: '',
    numberOfDesks: '',
    pricePerDesk: '',
    maximumNumberOfNomads: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    gallery: [], // Array to hold uploaded images
    amenities: [],
    rules: [],
    availability: [] // Array to hold availability data
  }
};

export function createSpaceReducer(state, action) {
  switch (action.type) {
    case 'SET_GENERAL':
    case 'SET_LOCATION':
      return {
        ...state,
        space: {
          ...state.space,
          ...action.payload.space
        }
      };
    case 'SET_GALLERY':
      return {
        ...state,
        space: {
          ...state.space,
          gallery: action.payload.gallery
        }
      };
    case 'SET_AMENITIES_AND_RULES':
      return {
        ...state,
        space: {
          ...state.space,
          amenities: action.payload.amenities,
          rules: action.payload.rules
        }
      };
    case 'SET_AVAILABILITY':
      return {
        ...state,
        space: {
          ...state.space,
          availability: action.payload.availability
        }
      };
    case 'CREATE_SPACE':
      // Assuming space creation logic here
      console.log('Space creation request sent with data:', state.space);
      alert('Space created successfully!');
      return state;
    default:
      return state;
  }
}

export function CreateSpaceContextProvider({ children }) {
  const [state, dispatch] = useReducer(createSpaceReducer, initialState);

  console.log('CreateSpaceContextProvider -> state', state);
  return (
    <CreateSpaceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CreateSpaceContext.Provider>
  );
}
