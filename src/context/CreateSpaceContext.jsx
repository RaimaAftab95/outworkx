import { createContext, useReducer } from 'react';

export const CreateSpaceContext = createContext();

/**
 * @typedef {Object} GalleryItem Gallery Item Entity
 * @property {string} type Gallery item type
 * @property {string} url Gallery item URL
 */

/**
 * @typedef {Object} TimeSlot Time Slot Entity
 * @property {number} day Time slot day (where 0 is Sunday and 6 is Saturday)
 * @property {number} start Time slot start time (in minutes since midnight)
 * @property {number} end Time slot end time (in minutes since midnight)
 */

/**
 * @typedef {Object} Space Space Entity
 * @property {string} name Space name
 * @property {string} description Space description
 * @property {string} address Space address
 * @property {string} addressHint Space address hint
 * @property {string} city Space city
 * @property {string} state Space state
 * @property {string} country Space country
 * @property {number} postalCode Space postal code
 * @property {Array<GalleryItem>} gallery Space gallery
 * @property {number} numberOfDesks Space number of desks
 * @property {number} pricePerDesk Space price per desk
 * @property {number} maximumNumberOfNomads Space maximum number of nomads
 * @property {Array<string>} amenities Space amenities
 * @property {Array<string>} rules Space rules
 * @property {number} longitude Space longitude
 * @property {number} latitude Space latitude
 * @property {Array<TimeSlot>} timings Space timings
 */

/** @type {Space | Object} */
const initialState = {};

export function createSpaceReducer(state, action) {
  switch (action.type) {
    case 'SET_GENERAL':
      return {
        ...state,
        name: action.payload.name,
        description: action.payload.description,
        numberOfDesks: action.payload.numberOfDesks,
        pricePerDesk: action.payload.pricePerDesk,
        maximumNumberOfNomads: action.payload.maximumNumberOfNomads
      };
    case 'SET_LOCATION':
      return {
        ...state,
        address: action.payload.address,
        addressHint: action.payload.addressHint,
        city: action.payload.city,
        state: action.payload.state,
        country: action.payload.country,
        postalCode: action.payload.postalCode,
        longitude: action.payload.longitude,
        latitude: action.payload.latitude
      };
    case 'SET_GALLERY':
      return {
        ...state,
        gallery: action.payload.gallery
      };
    case 'SET_AVAILABILITY':
      return {
        ...state,
        timings: action.payload.availability
      };
    case 'SET_AMENITIES_AND_RULES':
      return {
        ...state,
        amenities: action.payload.amenities,
        rules: action.payload.rules
      };
    default:
      return state;
  }
}

export function CreateSpaceContextProvider({ children }) {
  const [state, dispatch] = useReducer(createSpaceReducer, initialState);

  return (
    <CreateSpaceContext.Provider value={{ space: state, dispatch }}>
      {children}
    </CreateSpaceContext.Provider>
  );
}
