import Styles from './StatisticView.module.css';

import React from 'react';
import DiagramTab from '../../components/DiagramTab/';

const StatisticView = () => {
  return (
    <div className={Styles.container}>
      <DiagramTab />
    </div>
  );
};

export default StatisticView;
