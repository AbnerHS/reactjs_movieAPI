import { useEffect } from 'react';

import * as Styled from './styles';
import { Section } from '../../components/Section';
import { useMovieContext } from '../../contexts/MoviesProvider';
import * as API from '../../utils/imdb';

export const Home = () => {
  const [state, actions] = useMovieContext();
  useEffect(() => {
    API.URL.forEach((section) => actions.loadMovies(section.url, section.slug, section.title));
    return () => actions.cleanUp();
  }, [actions]);

  if (state.loading) {
    return (
      <Styled.Container>
        <Styled.Loading>
          <Styled.Heading>Loading</Styled.Heading>
        </Styled.Loading>
      </Styled.Container>
    );
  }

  if (!state.loading) {
    return (
      <Styled.Container>
        {state.collect.map((collect, index) => (
          <Section index={index} key={collect.slug} movies={collect.results} title={collect.title} />
        ))}
      </Styled.Container>
    );
  }
};
