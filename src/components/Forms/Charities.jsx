import React from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { InputGroup, useMediaQuery, Button, Box } from '@chakra-ui/react';
import { MinusIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { InputSelect, InputText, TopHeading } from '.';
import { helperInfo } from '../../assets/helperInfo';

export default function Charities() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const { values, setFieldValue, setFieldTouched, errors, touched } =
    useFormikContext();
  return (
    <>
      <TopHeading
        heading='Charitable Contributions (Optional)'
        info={helperInfo.charities}
      />
      <FieldArray
        name='charities'
        render={({ remove, insert }) => (
          <Box
            display='flex'
            border='tertiary'
            flexDirection={'column'}
            color='tertiary'
            borderColor={{ color: 'textContrast' }}
            borderWidth={isMobile ? '5px' : '0px'}
            gap={isMobile ? '0' : '5'}
            p='1em'
            my='1em'
            justifyContent={isMobile ? 'center' : 'space-evenly'}
            alignItems={isMobile ? 'center' : 'space-evenly'}>
            {values.charities.map((charity, index) => (
              <InputGroup
                key={`charities_${index}`}
                display='flex'
                border='tertiary'
                flexDirection={isMobile ? 'column' : 'row'}
                color='tertiary'
                borderColor={{ color: 'textContrast' }}
                borderWidth={isMobile ? '5px' : '0px'}
                gap={isMobile ? '0' : '5'}
                p='1em'
                justifyContent={isMobile ? 'center' : 'space-evenly'}
                alignItems={isMobile ? 'center' : 'space-evenly'}>
                <InputSelect
                  key={`charities_type_${index}`}
                  name={`charities_type_${index}`}
                  options={['Organization', 'Individual']}
                  value={charity && charity.type}
                  width={'max-content'}
                  my='0'
                  isCharity={true}
                  fieldName={`charities.${index}.address`}
                />
                <InputText
                  name={`charities_name_${index}`}
                  placeholder='Organization/Individual Name'
                  isLabel={false}
                  value={charity && charity.name}
                  my='0'
                  isCharity={true}
                  fieldName={`charities.${index}.name`}></InputText>
                <InputText
                  name={`charities_amount_${index}`}
                  placeholder='Enter Amount Percentage'
                  type='number'
                  isLabel={false}
                  width={isMobile ? null : '20vw'}
                  value={charity && charity.amount}
                  my='0'
                  isCharity={true}
                  fieldName={`charities.${index}.amount`}></InputText>

                <Button
                  aria-label='Toggle Color Mode'
                  borderColor='tertiary'
                  variant='outline'
                  mt='0.5em'
                  onClick={() => {
                    remove(values.charities.splice(index, 1));
                  }}
                  _focus={{ boxShadow: 'none' }}
                  boxShadow='md'
                  size='sm'
                  rounded={'lg'}
                  color='tertiary'
                  alignSelf={'center'}
                  w='fit-content'>
                  <MinusIcon />
                </Button>
              </InputGroup>
            ))}

            <Button
              aria-label='Toggle Color Mode'
              borderColor='tertiary'
              borderWidth={'thin'}
              variant='outline'
              mt='0.5em'
              onClick={() => {
                insert(values.charities.length, {});
              }}
              _focus={{ boxShadow: 'none' }}
              boxShadow='lg'
              size='sm'
              rounded='md'
              color='tertiary'
              alignSelf={'center'}
              w='fit-content'
              leftIcon={<PlusSquareIcon />}>
              Add {values.charities.length ? 'another' : 'a'} charity
            </Button>
          </Box>
        )}
      />
    </>
  );
}
