import React from 'react';
import { css } from '@emotion/core';
import GameController from '../../components/gameController';

const layoutStyles = css`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <div css={[layoutStyles]}>
    <GameController gridSize={4} />
  </div>
);
