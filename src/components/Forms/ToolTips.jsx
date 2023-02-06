import React from 'react';
import {
  Flex,
  IconButton,
  Tooltip,
  useMediaQuery,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export default function ToolTips({ info, isDisabled, ...props }) {
  const newInfo = info.split('\n').map((line) => <p key={line}>{line}</p>);

  return (
    <>
      {!isDisabled && (
        <>
          <Popover>
            <PopoverTrigger>
              <IconButton icon={<InfoIcon />} />
            </PopoverTrigger>
            <PopoverContent
              bg='tertiary'
              color='primary'>
              <PopoverCloseButton />
              <PopoverBody>
                <Flex direction={'column'}> {newInfo} </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </>
      )}
    </>
  );
}
