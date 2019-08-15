import React, { useState } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Tile from './Tile';

const gameContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 800px;
  width: 800px;
  border: 3px solid black;
  border-radius: 2%;
  padding: 15px;
`;

const initState = (gridSize) => {
  let state;
  for (let index = 0; index < gridSize; index += 1) {
    state = { ...state, [index]: { value: 2048, isVisible: true } };
  }
  return state;
};

const generateGrid = (gridState) =>
  Object.entries(gridState).map(([index, { value, isVisible }]) => {
    return <Tile key={index} value={value} isVisible={isVisible} />;
  });

function generateTile(gridState) {
  let tile;
  let tileId;
  do {
    tileId = Math.floor(Math.random() * Object.keys(gridState).length);
    tile = gridState[tileId];
    console.log(tile);
    console.log(tileId);
  } while (tile.isVisible);

  return { ...gridState, [tileId]: { ...gridState[tileId], isVisible: true } };
}

function gameController({ gridSize }) {
  const _gridSize = gridSize * gridSize;
  const [grid, setGrid] = useState(initState(_gridSize));

  //   setGrid({ ...generateTile(grid) });\

  return <div css={gameContainerStyles}>{generateGrid(grid, setGrid)}</div>;
}

gameController.propTypes = {
  gridSize: PropTypes.number,
};

gameController.defaultProps = {
  gridSize: 4,
};

export default gameController;
