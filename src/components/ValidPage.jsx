import React from 'react';

import NotFound from '../pages/NotFound';
import { getProblemGenerator } from '../utils/numberGenorators';
import { useLocation } from 'react-router-dom';

export default function ValidPage(props) {
  const location = useLocation();

  if (getProblemGenerator(location.pathname) != -1) {
    return props.children;
  } else {
    return <NotFound />;
  }
}
