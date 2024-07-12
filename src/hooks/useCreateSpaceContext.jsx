import { useContext } from 'react';
import { CreateSpaceContext } from '../context/CreateSpaceContext';
import { toast } from 'react-hot-toast';

const { VITE_BACKEND_API } = import.meta.env;

export function useCreateSpaceContext() {
  const context = useContext(CreateSpaceContext);

  if (!context) {
    throw new Error(
      'useCreateSpaceContext must be used within a CreateSpaceContextProvider'
    );
  }

  const { space, dispatch } = context;

  /**
   * Perform a create space request to the server
   * @returns {Promise<void>}
   */
  const createSpace = async () => {
    dispatch({ type: 'CREATE_SPACE_REQUEST' });

    try {
      const response = await fetch(`${VITE_BACKEND_API}/v1/space/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(space)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create space');
      }

      dispatch({ type: 'CREATE_SPACE_SUCCESS', payload: { space: data } });
    } catch (error) {
      dispatch({ type: 'CREATE_SPACE_FAILURE', payload: { error } });
    }
  };

  return { space, dispatch, createSpace };
}
