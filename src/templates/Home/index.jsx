import { useEffect } from 'react';
import { Section } from '../../components/Section';
import { useMovieContext } from '../../contexts/MoviesProvider';
import * as API from '../../utils/imdb';

import * as Styled from './styles';

export const Home = () => {
  const [state, actions] = useMovieContext();
  useEffect(() => {
    API.URL.forEach((section) => actions.loadMovies(section.url, section.slug, section.title));
    return () => actions.cleanUp();
  }, [actions]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  if (state.loading) {
    return <h2>Loading</h2>;
  }

  if (!state.loading) {
    return (
      <>
        {state.collect.map((collect, index) => (
          <Section index={index} key={collect.slug} movies={collect.results} title={collect.title} />
        ))}
      </>
    );
  }
};
