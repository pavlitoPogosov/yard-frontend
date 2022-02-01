import React, { useRef } from 'react'

import clsx from 'clsx'

import { EyeIcon } from 'src/common/components/_icons/EyeIcon'
import { EyeIconCrossed } from 'src/common/components/_icons/EyeIconCrossed'
import { FormLabel } from 'src/common/components/FormLabel/FormLabel'
import { useStateWithCallback } from 'src/common/hooks/useStateWithCallback'
import { mergeRefs } from 'src/utils/mergeRefs'

import s from './Input.module.scss'

export enum InputVariantsEnum {
  PRIMARY = 'primary',
}

export type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  inputClassName?: string
  value?: string
  label?: string
  marginBottom?: boolean
  enableTextVisibilityToggle?: boolean
  variant?: InputVariantsEnum
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const getInputClassName = ({
  variant,
  marginBottom,
  inputClassName,
  enableTextVisibilityToggle,
}: TInputProps) => {
  return clsx(
    s.Input__input,
    {
      [s.Input__primary]: variant === InputVariantsEnum.PRIMARY,
      [s.Input__withMargin]: !!marginBottom,
      [s.Input__withRightIcon]: !!enableTextVisibilityToggle,
    },
    inputClassName
  )
}

/* TODO add style in order to make beatiful */
export const Input = React.forwardRef<any, TInputProps>(
  (
    {
      className,
      inputClassName,
      onChange,
      value,
      label,
      type,
      marginBottom,
      enableTextVisibilityToggle,
      variant = InputVariantsEnum.PRIMARY,
      ...otherProps
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [isTextVisible, setTextVisibility] = useStateWithCallback(false)

    const handleToggleTextVisibility = () => {
      setTextVisibility(
        (prev) => !prev,
        () => {
          if (inputRef.current) {
            inputRef.current.focus()

            const { length } = inputRef.current.value
            inputRef.current.setSelectionRange(length, length)
          }
        }
      )
    }

    const _inputType = enableTextVisibilityToggle
      ? isTextVisible
        ? type
        : 'password'
      : type

    return (
      <label className={clsx(s.Input__container, className)}>
        {label && <FormLabel className={s.Input__label}>{label}</FormLabel>}

        <input
          {...otherProps}
          value={value}
          onChange={onChange}
          autoComplete="off"
          className={getInputClassName({
            variant,
            marginBottom,
            inputClassName,
            enableTextVisibilityToggle,
          })}
          ref={mergeRefs([inputRef, ref])}
          type={_inputType}
        />

        {enableTextVisibilityToggle && (
          <>
            {isTextVisible ? (
              <EyeIcon
                onClick={handleToggleTextVisibility}
                width={24}
                height={24}
                className={clsx(s.Input__eyeIcon, s.Input__rightIcon)}
              />
            ) : (
              <EyeIconCrossed
                onClick={handleToggleTextVisibility}
                width={24}
                height={24}
                className={clsx(s.Input__eyeIcon, s.Input__rightIcon)}
              />
            )}
          </>
        )}
      </label>
    )
  }
)
