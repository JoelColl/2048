import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { text, background } from '../styles/colors';

const baseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
  border: 2px solid black;
  border-radius: 5%;
`;

const contentStyle = css`
  font-size: 72px;
  font-weight: bold;
`;

const getTextStyles = (value) => {
  let startingNumber = 2;
  const styles = text.reduce((accumulator, color) => {
    if (!accumulator[startingNumber]) return { ...accumulator, [startingNumber]: color };
    startingNumber *= 2;

    return { ...accumulator, [startingNumber]: color };
  }, {});
  return css`
    color: ${styles[value]};
  `;
};

const getBackgroundStyles = (value) => {
  let startingNumber = 2048;
  const styles = background.reduce((accumulator, color) => {
    if (!accumulator[startingNumber]) return { ...accumulator, [startingNumber]: color };
    startingNumber /= 2;

    return { ...accumulator, [startingNumber]: color };
  }, {});
  return css`
    background-color: ${styles[value]};
  `;
};

function Tile({ isVisible, value }) {
  return (
    <div css={[baseStyle, getBackgroundStyles(value)]}>
      {isVisible && <span css={[contentStyle, getTextStyles(value)]}>{value}</span>}
    </div>
  );
}

Tile.propTypes = {
  isVisible: PropTypes.bool,
  value: PropTypes.number,
};

Tile.defaultProps = {
  isVisible: false,
  value: 2,
};

export default Tile;
