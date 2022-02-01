import React from 'react'

import clsx from 'clsx'

import { ButtonSizeEnum, ButtonVariantEnum } from './ButtonTypes'

import s from './Button.module.scss'

export type TButtonProps = {
  size?: ButtonSizeEnum
  variant?: ButtonVariantEnum
  className?: string
} & React.HtmlHTMLAttributes<HTMLButtonElement>

/* TODO think about polomorfic component */
export const Button: React.FC<TButtonProps> = ({
  size = ButtonSizeEnum.MEDIUM,
  variant = ButtonVariantEnum.PRIMARY,
  className,
  children,
  ...otherProps
}) => {
  const finalClassName = clsx(
    s.Button__container,
    {
      [s.Button__primary]: variant === ButtonVariantEnum.PRIMARY,
      [s.Button__medium]: size === ButtonSizeEnum.MEDIUM,
    },
    className
  )

  return (
    <button className={finalClassName} {...otherProps}>
      {children}
    </button>
  )
}
