import React from 'react';
import { NameAddress, TopHeading } from '.';
import { helperInfo } from '../../assets/helperInfo';

export default function Executors() {
  return (
    <>
      <TopHeading
        heading='Executors'
        info={helperInfo.executors}
      />
      <NameAddress
        mainName={'executor_main'}
        heading='Main Executor'
        isRequired={true}
      />
      <NameAddress
        mainName={'executor_backup'}
        heading='Backup Executor (Optional)'
      />
    </>
  );
}
