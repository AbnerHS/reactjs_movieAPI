import P from 'prop-types';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
export const Movie = ({ movie }) => {
  return (
    <Link to={`movie/${movie.id}`}>
      <Styled.Wrapper>
        <Styled.Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.name} />
      </Styled.Wrapper>
    </Link>
  );
};

Movie.propTypes = {
  movie: P.object.isRequired,
};
