import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useFormikContext } from 'formik';

export default function InputText({
  name,
  isRequired = false,
  isLabel = true,
  placeholder,
  helperText,
  type = 'text',
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
    <>
      <FormControl
        isInvalid={
          isRequired &&
          touched[isCharity ? `${fieldName}` : name] &&
          values[isCharity ? `${fieldName}` : name] === ''
        }
        isRequired={isRequired}
        border='tertiary'
        my={my}
        width={width}>
        <FormLabel
          as='h3'
          fontSize='lg'>
          {isLabel ? placeholder : null}
        </FormLabel>
        <Input
          defaultValue={values[isCharity ? `${fieldName}` : name]}
          onBlur={() => setFieldTouched(isCharity ? `${fieldName}` : name)}
          onChange={(e) => {
            setFieldValue(isCharity ? `${fieldName}` : name, e.target.value);
            handleChange(isCharity ? `${fieldName}` : name);
          }}
          // onChangeText={(val) => {
          //   setFieldValue(isCharity ? `${fieldName}` : name, val);
          // }}
          placeholder={placeholder}
          variant='filled'
          _placeholder={{ opacity: 0.3, color: 'tertiary', fontSize: 'sm' }}
          color='tertiary'
          bg={'step950'}
          borderColor='step850'
          borderWidth='0.3px'
          focusBorderColor='tertiary'
          type={type}
          width={width}
          {...props}
        />
        <FormHelperText
          color='secondaryTint'
          mt='0.1em'>
          {helperText}
        </FormHelperText>
        <FormErrorMessage>Field is required</FormErrorMessage>
      </FormControl>
    </>
  );
}
