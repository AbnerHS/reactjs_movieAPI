import * as actionTypes from './action-types';
import * as API from '../../utils/imdb';
export const buildActions = (dispatch) => {
  return {
    loadMovies: (url, slug, title) => asyncLoadMovies(dispatch, url, slug, title),
    getMovie: (id) => asyncGetMovie(dispatch, id),
    cleanUp: () => dispatch({ type: actionTypes.CLEAN_UP }),
  };
};

const asyncLoadMovies = async (dispatch, url, slug, title) => {
  dispatch({ type: actionTypes.LOAD_MOVIES_START });
  const result = await fetch(url);
  const json = await result.json();
  dispatch({ type: actionTypes.LOAD_MOVIES_END, payload: { ...json, slug: slug, title: title } });
};

const asyncGetMovie = async (dispatch, id) => {
  dispatch({ type: actionTypes.GET_MOVIE_START });
  const result = await fetch(API.URL_MOVIE(id));
  const json = await result.json();
  dispatch({ type: actionTypes.GET_MOVIE_END, payload: json });
};
