import React from 'react'

import { useField } from 'formik'

import {
  TextPhoneInput,
  TTextPhoneInputProps,
} from '../../TextPhoneInput/TextPhoneInput'

export type TTextPhoneFieldProps = TTextPhoneInputProps & { name: string }

export const TextPhoneField: React.FC<TTextPhoneFieldProps> = ({
  name,
  ...otherProps
}) => {
  const [field, meta] = useField(name)

  return (
    <TextPhoneInput
      {...field}
      {...otherProps}
      // fieldContainerProps={{
      //   ...otherProps.fieldContainerProps,
      //   error: meta.touched ? meta.error : undefined,
      // }}
    />
  )
}
