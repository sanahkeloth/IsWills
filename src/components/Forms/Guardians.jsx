import React from 'react';
import { NameAddress, TopHeading } from '.';
import { helperInfo } from '../../assets/helperInfo';

export default function Guardians() {
  return (
    <>
      <TopHeading
        heading='Guardians (Optional)'
        info={helperInfo.guardians}
      />
      <NameAddress
        mainName={'guardian_main'}
        heading='Main Guardian'
      />
      <NameAddress
        mainName={'guardian_backup'}
        heading='Backup Guardian'
      />
    </>
  );
}
