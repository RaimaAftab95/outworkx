import { createContext, useReducer } from 'react';
import { toast } from 'react-hot-toast';

export const CreateSpaceContext = createContext();

/**
 * @typedef {Object} Space
 * @property {string} name
 * @property {string} description
 * @property {string} numberOfDesks
 * @property {string} pricePerDesk
 * @property {string} maximumNumberOfNomads
 * @property {string} spaceOwner
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
    spaceOwner: '',
    address: '',
    addresshint: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    gallery: [],
    amenities: [],
    rules: [],
    availability: []
  }
};

export function createSpaceReducer(state, action) {
  switch (action.type) {
    case 'SET_GENERAL':
    case 'SET_LOCATION':
      return {
        space: {
          ...state.space,
          ...action.payload.space
        }
      };
    case 'SET_GALLERY':
      return {
        space: {
          ...state.space,
          gallery: action.payload.gallery
        }
      };
    case 'SET_AMENITIES_AND_RULES':
      return {
        space: {
          ...state.space,
          amenities: action.payload.amenities,
          rules: action.payload.rules
        }
      };
    case 'SET_AVAILABILITY':
      return {
        space: {
          ...state.space,
          availability: action.payload.availability
        }
      };
    case 'CREATE_SPACE_REQUEST':
      console.log('Sending space creation request with data:', state.space);
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'CREATE_SPACE_SUCCESS':
      // Handle successful space creation
      toast.success('Space created successfully!');
      console.log('Space created:', action.payload.space);
      return {
        ...state,
        space: action.payload.space,
        isLoading: false,
        error: null
      };
    case 'CREATE_SPACE_FAILURE':
      // Handle space creation failure
      toast.error(action.payload.error || 'Failed to create space');
      console.error('Create space error:', action.payload.error);
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export function CreateSpaceContextProvider({ children }) {
  const [state, dispatch] = useReducer(createSpaceReducer, initialState);

  return (
    <CreateSpaceContext.Provider value={{ space: state.space, dispatch }}>
      {children}
    </CreateSpaceContext.Provider>
  );
}
