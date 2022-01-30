import { Link } from 'react-router-dom';

import * as Styled from './styles';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';

export const Menu = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrollHeight(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (scrollHeight > 50) {
      setTop(false);
    } else {
      setTop(true);
    }
  }, [scrollHeight]);

  useEffect(() => {
    console.log(top);
  }, [top]);

  return (
    <Styled.Nav top={top}>
      <Styled.NavContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Styled.Logo>MOVIES</Styled.Logo>
        </Link>
        <SearchIcon style={{ fontSize: 30, color: 'white', cursor: 'pointer' }} />
      </Styled.NavContainer>
    </Styled.Nav>
  );
};
