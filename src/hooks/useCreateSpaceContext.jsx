import { CreateSpaceContext } from '../context/CreateSpaceContext';
import { useContext } from 'react';

export function useCreateSpaceContext() {
  const context = useContext(CreateSpaceContext);

  if (!context) {
    throw new Error(
      'useCreateSpaceContext must be used within a CreateSpaceContextProvider'
    );
  }

  return context;
}
