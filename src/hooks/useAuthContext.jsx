import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider'
    );
  }
  console.log('AuthContext Data:', context);

  return context;
}
