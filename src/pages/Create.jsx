import React from 'react';
import { Progress, Box, useMediaQuery } from '@chakra-ui/react';
import { redirect } from 'react-router-dom';
import {
  Backup,
  Charities,
  Executors,
  FormButton,
  Forms,
  Guardians,
  Personal,
  Preview,
  Witnesses,
} from '../components/Forms';

export default function Create() {
  const [step, setStep] = React.useState(1);
  const [progress, setProgress] = React.useState(0);
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Forms>
      <Box
        color='tertiary'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        maxW='100vw'
        minH='91vh'
        borderColor={{ color: 'textContrast' }}
        borderWidth='15px'
        px={isMobile ? '20px' : '5%'}
        py={isMobile ? '20px' : '3%'}>
        <Box>
          <Progress
            display={step === 7 ? 'none' : 'block'}
            value={progress}
            mb='2%'
            mx='5%'
            isAnimated></Progress>
          {step === 1 ? (
            <Personal />
          ) : step === 2 ? (
            <Executors />
          ) : step === 3 ? (
            <Guardians />
          ) : step === 4 ? (
            <Charities />
          ) : step === 5 ? (
            <Witnesses />
          ) : step === 6 ? (
            <Backup />
          ) : (
            <Preview />
          )}
        </Box>
        <FormButton
          step={step}
          setStep={setStep}
          progress={progress}
          setProgress={setProgress}
        />
      </Box>
    </Forms>
  );
}
