import * as Styled from './styles';
import P from 'prop-types';
import { Movie } from '../Movie';

export const Section = ({ title, movies }) => {
  return (
    <Styled.Section>
      <Styled.SectionTitle>{title}</Styled.SectionTitle>
      <Styled.SectionMovies>
        {Array.isArray(movies) && movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </Styled.SectionMovies>
    </Styled.Section>
  );
};

Section.propTypes = {
  title: P.string,
  movies: P.array,
};
