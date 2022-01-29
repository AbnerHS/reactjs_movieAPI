import P from 'prop-types';
import { useContext, useReducer, useRef } from 'react';
import { buildActions } from './build-actions';
import { Context } from './context';
import { initialState } from './data';
import { reducer } from './reducer';

export const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};

MoviesContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useMovieContext = () => {
  const context = useContext(Context);
  if (typeof context === 'undefined') {
    throw new Error('You have to use useMovieContext inside <MovieContextProvider />');
  }
  return [context[0], context[1]];
};
