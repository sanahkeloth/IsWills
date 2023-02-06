import { Textarea } from '@chakra-ui/react';
import React from 'react';
import TopHeading from './TopHeading';
import { useFormikContext } from 'formik';

export default function Preview() {
  const { values } = useFormikContext();
  return (
    <>
      <TopHeading
        heading='Preview'
        info={''}
        isDisabled={true}
      />
      <Textarea>{JSON.stringify(values)}</Textarea>
    </>
  );
}
