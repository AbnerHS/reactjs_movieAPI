export const KEY = 'api_key=ba3114b5299b38b5a1924d960e458d3d';
export const PREFIX = 'https://api.themoviedb.org/3/';
export const URL = [
  { title: 'Em Alta', slug: 'originals', url: `${PREFIX}movie/top_rated?language=pt-BR&${KEY}` },
  { title: 'Recomendados para você', slug: 'trending', url: `${PREFIX}trending/all/week?${KEY}` },
  { title: 'Ação:', slug: 'action', url: `${PREFIX}discover/movie?with_genres=28&${KEY}` },
  { title: 'Comédia:', slug: 'comedy', url: `${PREFIX}discover/movie?with_genres=35&${KEY}` },
];

export const URL_MOVIE = (ID) => `${PREFIX}movie/${ID}?${KEY}`;
