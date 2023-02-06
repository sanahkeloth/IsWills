import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { ToolTips } from '.';

export default function TopHeading({ heading, info, isDisabled = false }) {
  return (
    <Flex>
      <Heading
        as='h3'
        w='100%'
        textAlign={'center'}
        fontWeight='normal'
        size={'lg'}
        mb='2%'>
        {heading}
      </Heading>
      <ToolTips
        info={info}
        isDisabled={isDisabled}
        placement='left-start'
      />
    </Flex>
  );
}
