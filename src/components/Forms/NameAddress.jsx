import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { InputText } from '.';

function SubHeading({ heading, children }) {
  return (
    <>
      <Heading
        as='h5'
        w='100%'
        fontWeight='normal'
        size={'md'}
        my='1em'>
        {heading}
      </Heading>
      <Box
        color='tertiary'
        maxW='100vw'
        borderColor={{ color: 'textContrast' }}
        borderWidth='15px'
        px='1em'>
        {children}
      </Box>
    </>
  );
}

function ChildNameAddress({ isRequired, isPersonal, mainName }) {
  return (
    <>
      <InputText
        name={`${mainName}_name`}
        isRequired={isRequired}
        placeholder={'Full name'}
        helperText={`Must match ${
          isPersonal ? 'your' : 'their'
        } ID or passport document.`}
      />
      <InputText
        name={`${mainName}_address`}
        isRequired={isRequired}
        placeholder={'Full Address'}
        helperText={` ${
          isPersonal ? 'Your' : 'Their'
        } current legal residence.`}
        info={`Must match ${
          isPersonal ? 'your' : 'their'
        } ID or passport document. Remember that you have to update your will if ${
          isPersonal ? 'you' : 'they'
        } changed ${isPersonal ? 'your' : 'their'} address.`}
      />
    </>
  );
}

export default function NameAddress({
  heading,
  isRequired = false,
  isSubHeading = true,
  isPersonal = false,
  mainName,
}) {
  return (
    <>
      {isSubHeading ? (
        <SubHeading heading={heading}>
          <ChildNameAddress
            mainName={mainName}
            isRequired={isRequired}
            isPersonal={isPersonal}
          />
        </SubHeading>
      ) : (
        <ChildNameAddress
          mainName={mainName}
          isRequired={isRequired}
          isPersonal={isPersonal}
        />
      )}
    </>
  );
}
