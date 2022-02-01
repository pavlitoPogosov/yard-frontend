import React from 'react'

import { useField } from 'formik'

import { Input, TInputProps } from '../../Input/Input'

export type TInputFieldProps = TInputProps & { name: string }

export const InputField = React.forwardRef<HTMLInputElement, TInputFieldProps>(
  ({ children, name, ...otherProps }, ref) => {
    const [field, meta] = useField(name)

    return (
      <Input
        {...field}
        {...otherProps}
        // fieldContainerProps={{
        //   ...otherProps.fieldContainerProps,
        //   error: meta.touched ? meta.error : undefined,
        // }}
        ref={ref}
        value={field.value || ''}
      >
        {children}
      </Input>
    )
  }
)
