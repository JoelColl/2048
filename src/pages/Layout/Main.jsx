import React from 'react';
import { css } from '@emotion/core';
import Tile from '../../components/Tile';

const layoutStyles = css`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const gameContainer = css`
  display: flex;
  flex-wrap: wrap;
  height: 800px;
  width: 800px;
  justify-content: space-between;
  border: 3px solid black;
  border-radius: 2%;
  padding: 15px;
`;

export default () => (
  <div css={[layoutStyles]}>
    <div css={gameContainer}>
      <Tile value="2" isVisible></Tile>
      <Tile value="4" isVisible></Tile>
      <Tile value="8" isVisible></Tile>
      <Tile value="16" isVisible></Tile>
      <Tile value="32" isVisible></Tile>
      <Tile value="64" isVisible></Tile>
      <Tile value="128" isVisible></Tile>
      <Tile value="256" isVisible></Tile>
      <Tile value="512" isVisible></Tile>
      <Tile value="1024" isVisible></Tile>
      <Tile value="2048" isVisible></Tile>
      <Tile isVisible></Tile>
      <Tile isVisible></Tile>
      <Tile isVisible></Tile>
      <Tile isVisible></Tile>
      <Tile isVisible></Tile>
    </div>
  </div>
);
