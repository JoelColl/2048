// Window not defined because server Side rendering
/* eslint-disable no-undef */
import { useEffect } from 'react';

export default (key, callback) =>
  useEffect(() => {
    const handler = (event) => event.key === key && callback(event);

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);
