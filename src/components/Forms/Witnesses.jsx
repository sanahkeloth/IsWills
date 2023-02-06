import React from 'react';
import { NameAddress, TopHeading } from '.';
import { helperInfo } from '../../assets/helperInfo';

export default function Witnesses() {
  return (
    <>
      <TopHeading
        heading='Witnesses'
        info={helperInfo.witnesses}
      />
      <NameAddress
        mainName={'witness_1'}
        heading='Witness #1 (Required)'
        isRequired={true}
      />
      <NameAddress
        mainName={'witness_2'}
        heading='Witness #2 (Required)'
        isRequired={true}
      />
      <NameAddress
        mainName={'witness_3'}
        heading='Witness #3 (Optional)'
      />
    </>
  );
}
