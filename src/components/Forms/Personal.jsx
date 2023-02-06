import React from 'react';
import { NameAddress, TopHeading, InputSelect } from '.';

export default function Personal() {
  return (
    <>
      <TopHeading
        heading='Personal Information'
        info={''}
        isDisabled={true}
      />
      <InputSelect
        isRequired={true}
        name={'personal_province'}
        placeholder={'Province'}
        options={['British Columbia', 'Ontario']}
        helperText={'We currently only support BC and ON.'}
      />
      <NameAddress
        mainName={'personal'}
        isSubHeading={false}
        isRequired={true}
        isPersonal={true}
      />
    </>
  );
}
