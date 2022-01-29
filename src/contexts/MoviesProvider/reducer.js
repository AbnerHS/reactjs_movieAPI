import * as actionTypes from './action-types';
import { initialState } from './data';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MOVIES_START:
      return { ...state, loading: true };
    case actionTypes.LOAD_MOVIES_END:
      return { ...state, collect: [...state.collect, action.payload], loading: false };
    case actionTypes.GET_MOVIE_START:
      return { ...state, loading: true };
    case actionTypes.GET_MOVIE_END:
      return { ...state, movie: action.payload, loading: false };
    case actionTypes.CLEAN_UP:
      return initialState;
  }
  return state;
};
