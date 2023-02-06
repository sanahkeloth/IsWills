import React from 'react';
import { TopHeading, InputSelect, InputText, NameAddress } from '.';
import { helperInfo } from '../../assets/helperInfo';

export default function Backup() {
  return (
    <>
      <TopHeading
        heading='Backup Entity'
        info={helperInfo.backup}
      />
      <InputSelect
        name={`backup-type`}
        placeholder='Organization or Individual'
        isRequired={true}
        options={['Organization', 'Individual']}
      />
      <InputText
        name='backup_purpose'
        isRequired={true}
        placeholder='Purpose'
      />
      <NameAddress
        mainName={'backup'}
        isRequired={true}
        isSubHeading={false}
      />
    </>
  );
}
