import React from 'react';
import { css } from '@emotion/core';

export default () => {
  const styles = css`
    color: red;
  `;

  return <div css={styles}>Hello world!</div>;
};
