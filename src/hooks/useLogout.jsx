import { useAuthContext } from './useAuthContext';

export function useLogout() {
  const { dispatch } = useAuthContext();

  /**
   * Clear user and token from local storage
   * @returns {void}
   */
  async function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    dispatch({ type: 'LOGOUT' });
  }

  return { logout };
}
