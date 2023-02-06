import React from 'react';
import {
  FormControl,
  FormLabel,
  Select,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useFormikContext } from 'formik';

export default function InputSelect({
  name,
  isRequired = false,
  placeholder,
  options,
  helperText,
  width,
  my = '1em',
  isCharity = false,
  fieldName,
  ...props
}) {
  const {
    setFieldTouched,
    setFieldValue,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <FormControl
      isInvalid={
        isRequired &&
        touched[isCharity ? `${fieldName}` : name] &&
        values[isCharity ? `${fieldName}` : name] === ''
      }
      border='tertiary'
      isRequired={isRequired}
      my='my'
      width={width}>
      <FormLabel
        as='h3'
        fontSize='lg'>
        {placeholder}
      </FormLabel>
      <Select
        defaultValue={values[isCharity ? `${fieldName}` : name]}
        onBlur={() => setFieldTouched(isCharity ? `${fieldName}` : name)}
        onChange={(e) => {
          setFieldValue(isCharity ? `${fieldName}` : name, e.target.value);
          handleChange(isCharity ? `${fieldName}` : name);
        }}
        // onChangeText={(val) => {
        //   setFieldValue(isCharity ? `${fieldName}` : name, val);
        // }}
        variant='filled'
        icon={<ChevronDownIcon />}
        _placeholder={{ opacity: 0.3, color: 'tertiary' }}
        color='tertiary'
        bg={'step950'}
        borderColor='step850'
        borderWidth='0.3px'
        focusBorderColor='tertiary'
        rounded='md'
        width={width}
        {...props}>
        <option value=''>Select</option>
        {options.map((item, i) => (
          <option key={`${name}_${i}`}>{item}</option>
        ))}
      </Select>
      <FormHelperText
        color='secondaryTint'
        mt='0.1em'>
        {helperText}
      </FormHelperText>
      <FormErrorMessage>Field is required</FormErrorMessage>
    </FormControl>
  );
}
