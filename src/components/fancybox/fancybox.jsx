import React, { useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox.css';

const Fancybox = ({ delegate, options, children }) => {
  const deleg = delegate || '[data-fancybox]';

  useEffect(() => {
    const opts = options || {};

    NativeFancybox.bind(deleg, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default Fancybox;
