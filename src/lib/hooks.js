'use strict';

import { useSelector, useDispatch } from 'react-redux';

/**
 * @typedef {import('./store').ApplicationState} ApplicationState
 */

/**
 * @type {import('react-redux').TypedUseSelectorHook<ApplicationState>}
 */
export const useAppSelector = useSelector;

/**
 * @type {import('./store').ApplicationDispatch}
 */
export const useAppDispatch = useDispatch;
