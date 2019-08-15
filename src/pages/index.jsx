import React from 'react';
import { Global, css } from '@emotion/core';
import Main from './Layout/Main';

export default () => {
  const globalStyles = css`
    html,
    body,
    #___gatsby,
    div[role='group'][tabindex] {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      background: #59c173; /* fallback for old browsers */
      background: linear-gradient(to right, #5d26c1, #a17fe0, #59c173);
    }
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <Main></Main>
    </>
  );
};
