import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieContext } from '../../contexts/MoviesProvider';
import * as Styled from './styles';

export const View = () => {
  const { id } = useParams();
  const [state, actions] = useMovieContext();
  useEffect(() => {
    actions.getMovie(id);
  }, [actions, id]);
  useEffect(() => {
    console.log(state);
  }, [state]);

  if (state.loading) {
    return (
      <Styled.Container>
        <Styled.Loading>
          <Styled.Heading>Loading</Styled.Heading>
        </Styled.Loading>
      </Styled.Container>
    );
  }

  if (!state.loading && state.movie) {
    return (
      <Styled.Container>
        <Styled.MovieTitle>{state.movie.title}</Styled.MovieTitle>
        <img src={`https://image.tmdb.org/t/p/w300${state.movie.poster_path}`} alt={state.movie.title} />
      </Styled.Container>
    );
  }
  return <h1>xiii</h1>;
};
