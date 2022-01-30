import P from 'prop-types';
import { useMovieContext } from '../../contexts/MoviesProvider';
import * as Styled from './styles';

export const Arrow = ({ children, right, left, index }) => {
  const [state, actions] = useMovieContext();
  return (
    <Styled.Arrow
      left={left}
      right={right}
      onClick={() => {
        if (right) actions.moveRight(index);
        if (left) actions.moveLeft(index);
      }}
    >
      {children}
    </Styled.Arrow>
  );
};

Arrow.propTypes = {
  children: P.node.isRequired,
  index: P.number.isRequired,
  right: P.bool,
  left: P.bool,
};
