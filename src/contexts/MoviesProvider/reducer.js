import * as actionTypes from './action-types';
import { initialState } from './data';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MOVIES_START:
      return { ...state, positions: [...state.positions, { x: 0 }], loading: true };
    case actionTypes.LOAD_MOVIES_END:
      return { ...state, collect: [...state.collect, action.payload], loading: false };
    case actionTypes.GET_MOVIE_START:
      return { ...state, loading: true };
    case actionTypes.GET_MOVIE_END:
      return { ...state, movie: action.payload, loading: false };
    case actionTypes.MOVE_RIGHT:
      return {
        ...state,
        positions: state.positions.map((pos, index) => {
          if (index === action.index) {
            if (pos.x - 3 * 165 >= -12 * 165) {
              return { ...pos, x: pos.x - 3 * 165 };
            } else {
              return pos;
            }
          } else {
            return pos;
          }
        }),
      };
    case actionTypes.MOVE_LEFT:
      return {
        ...state,
        positions: state.positions.map((pos, index) => {
          if (index === action.index) {
            if (pos.x + 3 * 165 <= 0) {
              return { ...pos, x: pos.x + 3 * 165 };
            } else {
              return pos;
            }
          } else {
            return pos;
          }
        }),
      };
    case actionTypes.CLEAN_UP:
      return initialState;
  }
};
