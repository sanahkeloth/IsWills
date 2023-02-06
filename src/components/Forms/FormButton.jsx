import { Button, ButtonGroup, Flex, useToast } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import React from 'react';

export default function FormButton({ step, setStep, progress, setProgress }) {
  const { submitForm } = useFormikContext();

  return (
    <ButtonGroup
      mt='5%'
      w='100%'>
      <Flex
        w='100%'
        justifyContent='space-between'>
        <Flex>
          <Button
            onClick={() => {
              setStep(step - 1);
              step !== 7 && setProgress(progress - 20);
            }}
            variant='solid'
            isDisabled={step === 1}
            _hover={{ bg: 'tertiary' }}
            bg='tertiary'
            color='primary'
            w='7rem'
            mr='5%'>
            Back
          </Button>
          <Button
            w='7rem'
            isDisabled={step === 7}
            onClick={() => {
              setStep(step + 1);
              if (step === 6 || step === 7) {
                setProgress(100);
              } else {
                setProgress(progress + 20);
              }
            }}
            colorScheme='orange'
            borderColor='tertiary'
            _click={{ bg: 'tertiary' }}
            color='tertiary'
            variant='outline'>
            {step === 6 || step === 7 ? 'Preview' : 'Next'}
          </Button>
        </Flex>
        {step === 7 ? (
          <Button
            w='7rem'
            bg='tertiary'
            color='primary'
            variant='solid'
            _hover={{ bg: 'tertiary' }}
            type='submit'
            onClick={submitForm}
            // { () =>
            // {
            //   toast({
            //     title: 'Will created!.',
            //     description:
            //       "We've created your the will for you. Please download it and keep it safe.",
            //     status: 'success',
            //     duration: 3000,
            //     isClosable: true,
            //     containerStyle: {
            //       bg: 'tertiary',
            //       color: 'primary',
            //     },
            //   });
            // } }
          >
            Submit
          </Button>
        ) : null}
      </Flex>
    </ButtonGroup>
  );
}
