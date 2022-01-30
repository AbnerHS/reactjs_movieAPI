import * as Styled from './styles';
import P from 'prop-types';
import { Movie } from '../Movie';
import { Arrow } from '../Arrow';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useMovieContext } from '../../contexts/MoviesProvider';
import { useEffect } from 'react';

export const Section = ({ title, movies, index }) => {
  const [state, actions] = useMovieContext();
  useEffect(() => {
    // console.log(state);
  }, [state]);

  return (
    <Styled.Section
      onDragStart={(e) => e.preventDefault()}
      onTouchStart={(event) => actions.dragStart(event.changedTouches[0].clientX)}
      onTouchEnd={(event) => actions.dragEnd(event.changedTouches[0].clientX, index)}
    >
      <Styled.SectionTitle>{title}</Styled.SectionTitle>
      <Styled.SectionMovies marginLeft={state.positions[index].x}>
        <Arrow left={true} index={index}>
          <NavigateBeforeIcon style={{ fontSize: 40 }} />
        </Arrow>
        {Array.isArray(movies) && movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        <Arrow right={true} index={index}>
          <NavigateNextIcon style={{ fontSize: 40 }} />
        </Arrow>
      </Styled.SectionMovies>
    </Styled.Section>
  );
};

Section.propTypes = {
  title: P.string,
  movies: P.array,
  index: P.number,
};
