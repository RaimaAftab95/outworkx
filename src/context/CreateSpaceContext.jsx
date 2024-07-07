import { createContext, useReducer } from 'react';

export const CreateSpaceContext = createContext();

export function createSpaceReducer(state, action) {
  switch (action.type) {
    case 'SET_GENERAL':
      return {
        space: {
          ...state.space,
          ...action.payload.space
        }
      };
    default:
      return state;
  }
}

export function CreateSpaceContextProvider({ children }) {
  const [state, dispatch] = useReducer(createSpaceReducer, {
    space: null
  });

  console.log('CreateSpaceContextProvider -> state', state);

  return (
    <CreateSpaceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CreateSpaceContext.Provider>
  );
}
