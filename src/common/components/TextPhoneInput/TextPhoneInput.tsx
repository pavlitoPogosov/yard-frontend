import React, { useRef } from 'react'

import { Input, TInputProps } from 'src/common/components/Input/Input'
import {
  PhoneInput,
  TPhoneInputProps,
} from 'src/common/components/PhoneInput/PhoneInput'
import { useStateWithCallback } from 'src/common/hooks/useStateWithCallback'

type TOwnProps = {
  isInitiallyPhoneInput?: boolean
}

export type TTextPhoneInputProps = TOwnProps & (TInputProps | TPhoneInputProps)

export const TextPhoneInput: React.FC<TTextPhoneInputProps> = ({
  isInitiallyPhoneInput,
  onChange,
  value,
  ...otherProps
}) => {
  const [isPhoneInput, setIsPhoneInput] = useStateWithCallback(
    isInitiallyPhoneInput
  )

  const inputRef = useRef<any>(null)

  const handleInputTypeChange = (valueToHandle: string) => {
    const filteredValue = valueToHandle
      .replace(/ /g, '')
      .replace(/[(){}]/g, '')
      .replace(/[*+/-]/g, '')

    if (filteredValue) {
      if (Number(filteredValue)) {
        setIsPhoneInput(true, () => {
          inputRef.current?.numberInputRef?.focus()
        })
      } else {
        setIsPhoneInput(false, () => {
          inputRef.current?.focus()
        })
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputTypeChange(e.target.value)

    if (e.target.value.length === 1 && e.target.value === '+') {
      onChange &&
        onChange({
          ...e,
          target: {
            ...e.target,
            value: '',
          },
        })
    } else {
      onChange && onChange(e)
    }
  }

  const handleInputChangeCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputTypeChange(e.target.value)
    onChange && onChange(e)
  }

  return isPhoneInput ? (
    <PhoneInput
      {...otherProps}
      onChange={handleInputChange}
      onChangeCapture={handleInputChangeCapture}
      ref={inputRef}
      value={value}
    />
  ) : (
    <Input
      {...otherProps}
      value={value}
      onChange={handleInputChange}
      ref={inputRef}
    />
  )
}
