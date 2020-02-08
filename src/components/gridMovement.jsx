const checkColumn = (state, tile, rowId, columnId) => {
  if (state.length === 0) {
    return tile;
  }
  if (!state[columnId][rowId].isVisible) {
    return { ...tile, isVisible: true };
  }
  return checkColumn(state, tile, rowId, columnId - 1);
};

const moveUp = (gridState) => {
  const row = gridState[0].map((tile, rowId) => {
    if (!tile.isVisible) {
      return checkColumn(gridState, tile, rowId, gridState.length - 1);
    }
    return tile;
  });
  const newState = [...gridState];
  newState[0] = row;
  return newState;
};

const moveDown = (gridState) =>
  gridState.map((column, columnId) =>
    column.map((tile, rowId) => {
      if (
        tile.isVisible &&
        gridState[columnId + 1] &&
        gridState[columnId + 1][rowId] &&
        !gridState[columnId + 1][rowId].isVisible
      )
        return { ...tile, isVisible: false };
      if (
        !tile.isVisible &&
        gridState[columnId - 1] &&
        gridState[columnId - 1][rowId] &&
        gridState[columnId - 1][rowId].isVisible
      )
        return { ...tile, isVisible: true };

      if (
        tile.isVisible &&
        gridState[columnId - 1] &&
        gridState[columnId - 1][rowId] &&
        gridState[columnId - 1][rowId].isVisible &&
        gridState[columnId - 1][rowId].value === tile.value
      )
        return { ...tile, value: tile.value + gridState[columnId - 1][rowId].value };

      if (
        tile.isVisible &&
        gridState[columnId + 1] &&
        gridState[columnId + 1][rowId] &&
        gridState[columnId + 1][rowId].isVisible &&
        gridState[columnId + 1][rowId].value === tile.value
      )
        return { ...tile, isVisible: false };
      return tile;
    }),
  );

const moveLeft = (gridState) =>
  gridState.map((column, columnId) =>
    column.map((tile, rowId) => {
      if (
        tile.isVisible &&
        gridState[columnId][rowId + 1] &&
        !gridState[columnId][rowId + 1].isVisible
      )
        return { ...tile, isVisible: false };
      if (
        !tile.isVisible &&
        gridState[columnId][rowId + 1] &&
        gridState[columnId][rowId + 1].isVisible
      )
        return { ...tile, isVisible: true };

      if (
        tile.isVisible &&
        gridState[columnId][rowId + 1] &&
        gridState[columnId][rowId + 1].isVisible &&
        gridState[columnId][rowId + 1].value === tile.value
      )
        return { ...tile, value: tile.value + gridState[columnId][rowId + 1].value };

      if (
        !tile.isVisible &&
        gridState[columnId][rowId + 1] &&
        gridState[columnId][rowId + 1].isVisible &&
        gridState[columnId][rowId + 1].value === tile.value
      )
        return { ...tile, isVisible: false };
      return tile;
    }),
  );

const moveRight = (gridState) =>
  gridState.map((column, columnId) =>
    column.map((tile, rowId) => {
      if (
        tile.isVisible &&
        gridState[columnId][rowId - 1] &&
        !gridState[columnId][rowId - 1].isVisible
      )
        return { ...tile, isVisible: false };
      if (
        !tile.isVisible &&
        gridState[columnId][rowId - 1] &&
        gridState[columnId][rowId - 1].isVisible
      )
        return { ...tile, isVisible: true };

      if (
        tile.isVisible &&
        gridState[columnId][rowId - 1] &&
        gridState[columnId][rowId - 1].isVisible &&
        gridState[columnId][rowId - 1].value === tile.value
      )
        return { ...tile, value: tile.value + gridState[columnId][rowId - 1].value };

      if (
        !tile.isVisible &&
        gridState[columnId][rowId - 1] &&
        gridState[columnId][rowId - 1].isVisible &&
        gridState[columnId][rowId - 1].value === tile.value
      )
        return { ...tile, isVisible: false };
      return tile;
    }),
  );

export { moveDown, moveLeft, moveRight, moveUp };
