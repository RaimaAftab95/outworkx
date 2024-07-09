import { createContext, useReducer } from 'react';

export const CreateSpaceContext = createContext();

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
    highlights: [] // Array to hold highlights data
  }
};

export function createSpaceReducer(state, action) {
  switch (action.type) {
    case 'SET_GENERAL':
      return {
        ...state,
        space: {
          ...state.space,
          ...action.payload.space
        }
      };
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
    case 'SET_HIGHLIGHTS':
      return {
        ...state,
        space: {
          ...state.space,
          highlights: action.payload.highlights
        }
      };
    default:
      return state;
  }
}

export function CreateSpaceContextProvider({ children }) {
  const [state, dispatch] = useReducer(createSpaceReducer, initialState);

  console.log('CreateSpaceContextProvider -> state', state);
  const handleSpaceCreation = () => {
    // Assuming space creation is successful
    dispatch({ type: 'SET_SPACE_CREATED', payload: true });

    // Show alert for demonstration
    alert('Space created successfully!');
  };

  return (
    <CreateSpaceContext.Provider
      value={{ ...state, dispatch, handleSpaceCreation }}
    >
      {children}
    </CreateSpaceContext.Provider>
  );
}
