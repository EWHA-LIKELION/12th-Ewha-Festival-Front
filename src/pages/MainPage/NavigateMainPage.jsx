import { useState, useEffect } from 'react';

import { getCookie } from '../../api/http';

import MainPage from './MainPage';
import BoothMainPage from './BoothMainPage';
import PerfMainPage from './PerfMainPage';
import TFMainPage from './TFMainPage';

const NavigateMainPage = () => {
  const booth = getCookie('booth') === 'true';
  const performance = getCookie('performance') === 'true';
  const tf = getCookie('tf') === 'true';

  console.log(booth, performance, tf);

  if (performance && booth) {
    return <PerfMainPage />;
  } else if (booth && !performance) {
    return <BoothMainPage />;
  } else if (tf) {
    return <TFMainPage />;
  } else {
    return <MainPage />;
  }
};

export default NavigateMainPage;
