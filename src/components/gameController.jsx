import React, { useState } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import useKey from '../hooks/useKey';
import { moveDown, moveLeft, moveRight, moveUp } from './gridMovement';
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
  const state = new Array(gridSize);
  for (let column = 0; column < gridSize; column += 1) {
    state[column] = new Array(gridSize);
    for (let row = 0; row < gridSize; row += 1) {
      state[column][row] = { id: `${column}${row}`, value: 2, isVisible: false };
    }
  }

  const columnId = Math.floor(Math.random() * Object.keys(state).length);
  const rowId = Math.floor(Math.random() * Object.keys(state).length);
  state[columnId][rowId] = { id: `${columnId}${rowId}`, value: 2, isVisible: true };

  return state;
};

const generateGrid = (gridState) =>
  gridState.reduce(
    (accumulator, column) => [
      ...accumulator,
      ...column.map(({ id, value, isVisible }) => {
        return <Tile key={id} value={value} isVisible={isVisible} />;
      }),
    ],
    [],
  );

const generateTile = (gridState) => {
  const columnId = Math.floor(Math.random() * Object.keys(gridState).length);
  const rowId = Math.floor(Math.random() * Object.keys(gridState).length);
  const { isVisible } = gridState[columnId][rowId];
  if (!isVisible) {
    const newState = [...gridState];
    newState[columnId][rowId] = {
      ...gridState[columnId][rowId],
      isVisible: true,
    };

    return newState;
  }

  return generateTile(gridState);
};

const moveGrid = (gridState, { key }) => {
  let state;
  switch (key) {
    case 'ArrowUp':
      state = moveUp(gridState);
      break;
    case 'ArrowDown':
      state = moveDown(gridState);
      break;
    case 'ArrowLeft':
      state = moveLeft(gridState);
      break;
    case 'ArrowRight':
      state = moveRight(gridState);
      break;
    default:
      return generateTile(gridState);
  }
  return generateTile(state);
};

function gameController({ gridSize }) {
  const [grid, setGrid] = useState(initState(gridSize));

  useKey('ArrowUp', (event) => setGrid((state) => moveGrid(state, event)));
  useKey('ArrowDown', (event) => setGrid((state) => moveGrid(state, event)));
  useKey('ArrowLeft', (event) => setGrid((state) => moveGrid(state, event)));
  useKey('ArrowRight', (event) => setGrid((state) => moveGrid(state, event)));

  return (
    <>
      <div css={gameContainerStyles}>{generateGrid(grid)}</div>;
    </>
  );
}

gameController.propTypes = {
  gridSize: PropTypes.number,
};

gameController.defaultProps = {
  gridSize: 4,
};

export default gameController;
