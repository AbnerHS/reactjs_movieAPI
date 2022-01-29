import { useEffect } from 'react';
import { Section } from '../../components/Section';
import { useMovieContext } from '../../contexts/MoviesProvider';
import * as API from '../../utils/imdb';

import * as Styled from './styles';

export const Home = () => {
  const [state, actions] = useMovieContext();
  useEffect(() => {
    API.URL.forEach((section) => actions.loadMovies(section.url, section.slug, section.title));
    console.log('carregando todos os filmes');
    return () => actions.cleanUp();
  }, [actions]);

  if (state.loading) {
    return <h2>Loading</h2>;
  }

  if (!state.loading) {
    return (
      <>
        {state.collect.map((collect) => (
          <Section key={collect.slug} movies={collect.results} title={collect.title} />
        ))}
      </>
    );
  }
};
