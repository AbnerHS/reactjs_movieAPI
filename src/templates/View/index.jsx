import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieContext } from '../../contexts/MoviesProvider';
import * as Styled from './styles';

export const View = () => {
  const { id } = useParams();
  const [state, actions] = useMovieContext();
  useEffect(() => {
    actions.getMovie(id);
    console.log('carregando um filme');
  }, [actions, id]);
  useEffect(() => {
    console.log(state);
  }, [state]);

  if (state.loading) {
    return <Styled.MovieTitle>Loading</Styled.MovieTitle>;
  }

  if (!state.loading && state.movie) {
    return (
      <div>
        <Styled.MovieTitle>{state.movie.title}</Styled.MovieTitle>
        <img src={`https://image.tmdb.org/t/p/w300${state.movie.poster_path}`} alt={state.movie.title} />
      </div>
    );
  }
  return <h1>xiii</h1>;
};
